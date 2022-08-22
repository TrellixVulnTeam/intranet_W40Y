const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./MyDB.db')

// Configuration des tables de la base de données

db.serialize(function () {
  db.run('CREATE TABLE IF NOT EXISTS datas (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS strass (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, usename TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS publis (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, type TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS calendar (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, date DATE)')
  db.run('CREATE TABLE IF NOT EXISTS objets (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)')
  db.run('CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)')
})