const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/MyDB.db')

const getSearch = ((req, res) => {
  try {
    var word = req.params.searchWord.toLowerCase()

    db.all('SELECT * FROM publis ORDER BY id DESC', (err, rows) => {
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
                    if (row.title.toLowerCase().includes(word) || row.content?.replace( /(<([^>]+)>)/ig, '').toLowerCase().includes(word)) {
                        output.push(row)
                    }
                })
            }
            res.send(output)
        }
    })
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = {
    getSearch
}