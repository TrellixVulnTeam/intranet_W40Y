const jwt = require('jsonwebtoken')
var ldap = require('../ldap/ldap')
require('dotenv').config()

const auth = ((req, res, next) => {
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
        ldap.searchLDAP(client, '(uid='+userId+')', 'ou=people, dc=boquette, dc=fr')
        .then(output => {
            client.destroy()
            if (output) {
                return next()
            } else {
                return res.status(402).send('Utilisateur invalide')
            }
        })
    } catch (err) {
        return res.status(500).send("Erreur lors de l'authentification")
    }
})

module.exports = auth