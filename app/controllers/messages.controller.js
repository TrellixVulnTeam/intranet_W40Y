const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('MyDB.db')

const getMessages = ((req, res) => {
  try {
    db.all('SELECT * FROM messages ORDER BY id DESC LIMIT 30', (err, rows) => {
      var output = []
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else {
        if (rows.length != 0) {
          rows.forEach(function (row) {
            output.push(row)
          })
        } else {
          output.push({content: 'Aucun message envoyé'})
        }
        res.send(output)
      }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

const createMessage = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('INSERT INTO messages(author, content, date) VALUES(?, ?, ?)', [req.body.author, req.body.content, new Date()], (err, row) => {
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
    getMessages,
    createMessage
}