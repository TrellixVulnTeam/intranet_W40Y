const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('MyDB.db')

const getEvents = ((req, res) => {
  try {
    db.all('SELECT * FROM events ORDER BY title', (err, rows) => {
      var output = []
      if (err) {
        console.log(err)
      }
      else {
        if (rows.length != 0) {
          rows.forEach(function (row) {
            output.push(row)
          })
        }
        res.send(output)
      }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const getEvent = ((req, res) => {
  try {
    const useName = req.params.eventID

    db.all('SELECT * FROM events WHERE useName=?', [useName], (err, rows) => {
      var output
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else {
        if (rows.length === 0) {
          output = {}
        }
        else {
          rows.forEach(function (row) {
            output = row
          })
        }
        res.send(output)
      }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const createEvent = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('INSERT INTO events(title, useName, strass) VALUES(?, ?, ?)', [req.body.title, req.body.useName, req.body.strass], (err, row) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const modifyEvent = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('UPDATE events SET title=?, strass=? WHERE useName=?', [req.body.title, req.body.strass, req.body.useName], (err, row) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const deleteEvent = ((req, res) => {
  try {
    db.run('DELETE FROM events WHERE useName=?', [req.body.useName], (err, row) => {
      if (err) {
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  modifyEvent,
  deleteEvent
}