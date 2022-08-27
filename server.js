const express = require('express')
const app = express()
const cors = require('cors')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/MyDB.db')

const path = require('path')

require('dotenv').config()

// Création des tables et insertion dans la bdd

db.serialize(function () {
  db.run('CREATE TABLE IF NOT EXISTS publis (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, type TEXT, date TEXT, strass TEXT, strassName TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS sports (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, jour TEXT, hours TEXT, infos TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, useName TEXT, strass TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS liens (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, link TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS horaires (id INTEGER PRIMARY KEY AUTOINCREMENT, strass TEXT, jours TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, author TEXT, content TEXT, date TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, prix TEXT, quantite TEXT, img TEXT)')
})

// db.all('SELECT * FROM sqlite_master where type=?', ['table'], (err, rows) => {
//   var output = []
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log(rows)
//   }
// })
// db.run('INSERT INTO horaires(strass, jours) VALUES(?,?)', [['AE','TT'], ['9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h']])
// db.run('UPDATE horaires SET jours=? WHERE id=?', [['9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h', '9h - 21h'], '3'])
// db.run('ALTER TABLE publis ADD strassName TEXT') // AJouter une colonne
// db.run('ALTER TABLE sports DROP date') // Retirer une colonne
// db.run('DELETE FROM events WHERE id=9')
// db.all('SELECT * FROM pages') // Vérifier si une table existe
// db.all('DROP TABLE messages') // Détruire une table

const authRoute = require('./app/routes/auth.route.js')
const publisRoute = require('./app/routes/publis.route.js')
const calendarRoute = require('./app/routes/calendar.route.js')
const messagesRoute = require('./app/routes/messages.route.js')
const eventsRoute = require('./app/routes/events.route.js')
const liensRoute = require('./app/routes/liens.route.js')
const searchRoute = require('./app/routes/search.route.js')
const strassRoute = require('./app/routes/strass.route.js')
const horairesRoute = require('./app/routes/horaires.route.js')
const cvisRoute = require('./app/routes/cvis.route.js')
const auth = require('./app/middleware/auth.middleware')

app.options('*', cors())
app.use(cors({
  methods: ['GET','POST','DELETE','PUT'],
  origin: process.env.ALLOW_ORIGIN,
  credentials: true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, process.env.FRONT_URL)))

const routes = ['actus', 'birse', 'calendar', 'cvis', 'events', 'liens', 'strass']
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, process.env.FRONT_URL+'/index.html')) // Route principale, page d'accueil
})
routes.map(item => 
  app.get('/'+item, (req, res) => {
    res.sendFile(path.join(__dirname, process.env.FRONT_URL+'/'+item+'.html')) // Différentes routes de l'application, permet le refresh de la page
  })
)

app.get('/api/images/:img', (req, res) => {
  res.sendFile(path.join(__dirname, './images/'+req.params.img))
})

app.use('/api/auth', authRoute)
app.use('/api/publis', auth, publisRoute)
app.use('/api/calendar', auth, calendarRoute)
app.use('/api/messages', auth, messagesRoute)
app.use('/api/events', auth, eventsRoute)
app.use('/api/liens', auth, liensRoute)
app.use('/api/search', auth, searchRoute)
app.use('/api/strass', auth, strassRoute)
app.use('/api/horaires', auth, horairesRoute)
app.use('/api/cvis', auth, cvisRoute)

app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, process.env.FRONT_URL+'/404.html')) // Route 404 si cela ne mène a rien
)

app.set('port', 5050)
console.log('Server listening on port', app.get('port'))
app.listen(app.get('port'))