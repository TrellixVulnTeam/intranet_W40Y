const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const ldap = require('../ldap/ldap')

require('dotenv').config()

function generateAccessToken(user, xsrfToken) {
  return jwt.sign(
    {data: user, xsrfToken},
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '182d'
    }
  )
}

const setToken = ((req, res) => {
  try {
    req.setEncoding('utf8')

    var client = ldap.connexion()
    Promise.all([
      ldap.searchLDAP(client, '(cn=pg)', 'ou=groups, dc=boquette, dc=fr'),
      ldap.searchLDAP(client, '(|(description='+req.body.username+')(uid='+req.body.username+'))', 'ou=people, dc=boquette, dc=fr')
    ])
    .then(data => {
      const group = data[0][0]
      const user = data[1][0]

      if (user) {
        client.bind(user.dn, req.body.password, (err) => {
          if (!err) {
            const xsrfToken = crypto.randomBytes(64).toString('hex')
            const accessToken = generateAccessToken(user.uid, xsrfToken)

            client.destroy()
            res.cookie('access_token', accessToken, {
              httpOnly: true,
              secure: false,
              maxAge: 182*24*60*60*1000
            })

            if (group.memberUid.includes(user.uid)) {
              res.send({
                xsrfToken,
                point: false
              })
            } else {
              res.send({
                xsrfToken,
                point: true
              })
            }
          } else {
            client.destroy()
            res.status(401).send('Utilisateur ou mot de passe invalides')
          }
        })
      } else {
        res.status(401).send('Utilisateur ou mot de passe invalides')
      }
    })
  } catch (err) {
    res.status(500).send("Erreur lors de l'authentification")
  }
})

const getUser = ((req, res) => {
  try {
    const { headers } = req
    
    if (!headers.cookie) {
      return res.status(402).send('Cookies invalides')
    }

    const accessToken = headers.cookie.replace('access_token=', '')

    if (!headers || !headers['x-xsrf-token']) {
      return res.status(402).send('Token invalide')
    }
    
    const xsrfToken = headers['x-xsrf-token']

    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

    if (xsrfToken !== decodedToken.xsrfToken) {
      return res.status(402).send('Token invalide')
    }

    const userId = decodedToken.data

    var client = ldap.connexion()
    Promise.all([
      ldap.searchLDAP(client, '(strass=TRUE)', 'ou=groups, dc=boquette, dc=fr'),
      ldap.searchLDAP(client, '(uid='+userId+')', 'ou=people, dc=boquette, dc=fr')
    ])
    .then(data => {
      const groups = data[0]
      const user = data[1][0]

      if (!user) {
        return res.status(402).send("Utilisateur invalide")
      }

      var finalGroups = [{
        'description': user.displayName,
        'uid': user.uid,
        'cn': 'user',
        'givenName': user.givenName,
        'sn': user.sn
      }]

      groups.map(item => {
        item.memberUid?.includes(user.uid)?
          finalGroups.push(item)
        :undefined
      })

      client.destroy()
      res.send(finalGroups)
    })
  } catch (err) {
    res.status(500).send("Erreur lors de l'authentification")
  }
})

module.exports = {
  getUser,
  setToken
}