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

    client = ldap.connexion()
    Promise.all([
      ldap.searchLDAP(client, '(cn=pg)', 'ou=groups, dc=boquette, dc=fr'),
      ldap.searchLDAP(client, '(|(description='+req.body.username+')(uid='+req.body.username+'))', 'ou=people, dc=boquette, dc=fr')
    ])
    .then(data => {return data})
    .then(data => {
      const group = data[0][0]
      const user = data[1][0]

      client = ldap.connexion()
      if (user) {
        if (group.memberUid.includes(user.uid)) {
          client.bind(user.dn, req.body.password, (err) => {
            if (err == undefined) {
              const xsrfToken = crypto.randomBytes(64).toString('hex')
              const accessToken = generateAccessToken(user.uid, xsrfToken)

              console.log('binded')
              res.cookie('access_token', accessToken, {
                httpOnly: true,
                secure: false,
                maxAge: 182*24*60*60*1000
              })
              res.send({
                xsrfToken
              })
            } else {
              res.status(401).send("Invalid Credentials")
            }
          })
          client.unbind()
        }
      } else {
        res.status(401).send("Invalid Credentials")
      }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const getUser = ((req, res) => {
  try {
    const { headers } = req
    
    if (!headers.cookie) {
      return res.status(401).send("Unable to find Cookies")
    }

    const accessToken = headers.cookie.replace('access_token=', '')

    if (!headers || !headers['x-xsrf-token']) {
      return res.status(401).send("Invalid Access Token")
    }
    
    const xsrfToken = headers['x-xsrf-token']

    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

    if (xsrfToken !== decodedToken.xsrfToken) {
      return res.status(401).send("Invalid Credentials")
    }

    const userId = decodedToken.data

    client = ldap.connexion()
    Promise.all([
      ldap.searchLDAP(client, '(strass=TRUE)', 'ou=groups, dc=boquette, dc=fr'),
      ldap.searchLDAP(client, '(uid='+userId+')', 'ou=people, dc=boquette, dc=fr')
    ])
    .then(data => {
      const groups = data[0]
      const user = data[1][0]

      if (!user) {
        return res.status(401).send("Invalid Credentials")
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

      res.send(finalGroups)
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = {
  getUser,
  setToken
}