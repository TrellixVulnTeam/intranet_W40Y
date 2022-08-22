const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('MyDB.db')

const fs = require('fs')

const getArticles = ((req, res) => {
  try {
    db.all('SELECT * FROM articles ORDER BY prix', (err, rows) => {
        var output = []
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
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

const getArticle = ((req, res) => {
    try {
        const id = req.params.articleID

        db.all('SELECT * FROM articles WHERE id=?', [id], (err, rows) => {
            var output = []
            if (err) {
                console.log(err)
                res.sendStatus(500)
            } else {
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

const createArticle = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('INSERT INTO articles(title, prix, quantite, img) VALUES(?, ?, ?, ?)', [req.body.title, req.body.prix, req.body.quantite, req.file.originalname], (err, row) => {
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

const modifyArticle = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('UPDATE articles SET title=?, prix=?, quantite=? WHERE id=?', [req.body.title, req.body.prix, req.body.quantite, req.body.id], (err, row) => {
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

const deleteArticle = ((req, res) => {
  try {
    db.all('SELECT * FROM articles WHERE id=?', [req.body.id], (err, rows) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            if (rows.length != 0) {
                fs.unlink('./images/'+rows[0].img, (err) => {console.log(err)})
            }
            db.run('DELETE FROM articles WHERE id=?', [req.body.id], (err, row) => {
                if (err) {
                  console.log(err)
                  res.sendStatus(500)
                } else {
           
                  res.sendStatus(200)
                }
            })
        }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    modifyArticle,
    deleteArticle
}