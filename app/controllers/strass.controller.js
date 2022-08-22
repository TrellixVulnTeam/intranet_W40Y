var ldap = require('ldapjs')

require('dotenv').config()

const connexion = (() => {
  const client = ldap.createClient({
    url: process.env.LDAP_IP
  })
  client.on('error', (err) => {
    console.log("Connexion error : " + err);
  })
  return client
})

const get1Strass = ((req, res) => {
  try {
    var strass = req.params.strassID.toLowerCase()

    client = connexion()
    searchLDAP(client, '(bouls=*)', 'ou=people, dc=boquette, dc=fr')
    .then(output => {
      var users = []
      for (let i = 0; i < output.length; i++) {
        var user = output[i]
        var bouls = user.bouls.split(';')

        for (let j = 0; j < bouls.length; j++) {
          var boulsDesc = bouls[j].split(':')

          if (boulsDesc[0].toLowerCase() == strass && user.description.includes('221')) {
            users.push({
              cn: user.cn,
              sn: user.sn,
              givenName: user.givenName,
              displayName: user.displayName,
              bouls: boulsDesc[1]
            })
          }
        }
      }
      res.send(users)
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const getStrass = ((req, res) => {
  try {
    client = connexion()
    searchLDAP(client, '(strass=TRUE)', 'ou=groups, dc=boquette, dc=fr')
    .then(output => res.send(output))
  } catch (err) {
    res.sendStatus(500)
  }
})

const searchLDAP = function(client, filter, dn) {
  return new Promise((resolve, reject) => {
      var opts = {
          filter: filter,
          scope: 'sub'
      }
      client.search(dn, opts, (err, response) => {
          if (!err) {
              var output = []
              response.on('searchEntry', (entry) => {
                  output.push(entry.object)
              })
              response.on('end', () => {
                  resolve(output)
              })
          }
      })
  })
}

module.exports = {
    getStrass,
    get1Strass
}