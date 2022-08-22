const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/MyDB.db')

const getPublisType = ((req, res) => {
  try {
    const type = req.params.publisType

    db.all('SELECT * FROM publis WHERE type=? ORDER BY id DESC', [type], (err, rows) => {
      var output = []
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else {
        if (rows.length === 0) {
          output.push({ id: 0, title: "Aucun Contenu", content: "Malheureusement, cette page n'a pas encore été éditée par la strass concernée...", strass:""})
        }
        else {
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

const getPublisStrass = ((req, res) => {
  try {
    const strass = req.params.publisStrass

    db.all('SELECT * FROM publis WHERE strass=? ORDER BY id DESC', [strass], (err, rows) => {
      var output = []
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else {
        if (rows.length === 0) {
          output.push({ id: 0, title: "Aucun Contenu", content: "Malheureusement, cette strass n'a rien publié pour le moment...", strass:""})
        }
        else {
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

const getPubli = ((req, res) => {
  try {
    const id = req.params.publisID

    db.all('SELECT * FROM publis WHERE id=?', [id], (err, rows) => {
      var output = []
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else {
        if (rows.length === 0) {
          output.push({ id: 0, title: "Erreur", content: "Malheureusement, cette publication n'éxiste pas"})
        }
        else {
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

const getLatestPubli = ((req, res) => {
  try {
    db.all('SELECT * FROM publis ORDER BY id DESC LIMIT 1', (err, rows) => {
      var output = []
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        if (rows.length === 0) {
          output.push({ id: 0, title: "Erreur", content: "Malheureusement, cette publication n'éxiste pas", strass: "", type: ""})
        }
        else {
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

const createPubli = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('INSERT INTO publis(title, content, type, strass, strassName) VALUES(?, ?, ?, ?, ?)', [req.body.title, req.body.content, req.body.type, req.body.strass.cn, req.body.strass.description], (err, row) => {
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

const modifyPubli = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('UPDATE publis SET title=?, content=? WHERE id=?', [req.body.title, req.body.content, req.body.id], (err, row) => {
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

const deletePubli = ((req, res) => {
  try {
    db.run('DELETE FROM publis WHERE id=?', [req.body.id], (err, row) => {
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
    getPublisType,
    getPublisStrass,
    getPubli,
    getLatestPubli,
    createPubli,
    modifyPubli,
    deletePubli
}