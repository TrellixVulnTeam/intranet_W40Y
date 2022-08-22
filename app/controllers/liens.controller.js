const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/MyDB.db')

const getLiens = ((req, res) => {
  try {
    db.all('SELECT * FROM liens ORDER BY id DESC', (err, rows) => {
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
      }
      res.send(output)
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const createLien = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('INSERT INTO liens(title, link) VALUES(?, ?)', [req.body.title, req.body.url], (err, row) => {
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

const deleteLien = ((req, res) => {
  try {
    db.run('DELETE FROM liens WHERE id=?', [req.body.id], (err, row) => {
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

module.exports = {
    getLiens,
    createLien,
    deleteLien
}