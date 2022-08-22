const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/MyDB.db')

const getHoraires = ((req, res) => {
    try {
        db.all('SELECT * FROM horaires', (err, rows) => {
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
                }
                res.send(output)
            }
        })
    } catch (err) {
        res.sendStatus(500)
    }
})

const modifyHoraires = ((req, res) => {
    try {
        req.setEncoding('utf8')
        
        db.all('SELECT * FROM horaires WHERE id=?', [req.body.id], (err, rows) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            }
            else {
                if (rows.length === 0) {
                    res.status(500).send("Empty Row")
                }
                else {
                    rows.forEach(function (row) {
                        var output = row.jours.split(',')
                        output.splice(req.body.row, 1, req.body.horaire)
                        
                        db.run('UPDATE horaires SET jours=? WHERE id=?', [output, req.body.id], (err, row) => {
                            if (err) {
                                res.sendStatus(500)
                            } else {
                                res.sendStatus(200)
                            }
                        })
                    })
                }
            }
        })
    } catch (err) {
        res.sendStatus(500)
    }
})

module.exports = {
    getHoraires,
    modifyHoraires
}