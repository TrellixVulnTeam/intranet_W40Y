var ldap = require('../ldap/ldap')

require('dotenv').config()

const get1Strass = ((req, res) => {
  try {
    var strass = req.params.strassID.toLowerCase()

    var client = ldap.connexion()
    ldap.searchLDAP(client, '(bouls=*)', 'ou=people, dc=boquette, dc=fr')
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
      client.destroy()
      res.send(users)
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const getStrass = ((req, res) => {
  try {
    var client = ldap.connexion()
    ldap.searchLDAP(client, '(strass=TRUE)', 'ou=groups, dc=boquette, dc=fr')
    .then(output => {
      client.destroy()
      res.send(output)
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = {
    getStrass,
    get1Strass
}