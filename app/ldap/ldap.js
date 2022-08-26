var ldap = require('ldapjs')

require('dotenv').config()

const connexion = (() => {
    const client = ldap.createClient({
        url: process.env.LDAP_IP
    })
    client.on('error', (err) => {
        console.log("Connexion error : " + err)
    })
    return client
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
                    client.destroy()
                    resolve(output)
                })
            }
        })
    })
}

module.exports = {
    connexion,
    searchLDAP
}