const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/MyDB.db')

const { google } = require('googleapis')

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
const GOOGLE_PRIVATE_KEY =   "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCGo16LEWGzbsWb\ndlSN4wFT3J2ZkvBpksnfjbPRHkH03f/J8gApf7XGkX7DaqJXkntysvAUCdsaxIa/\n9+MH0yYqsLT2v/5MIeyniOnnVsz0tXFDfRtT5x7AHGelcNR21cLKdwlTZ48STfiZ\n/C1RaMYR+jQjHqU4fXZzAsaaBP36kdxAWRsaoPsPsmWA6nEuZvBFaY4rXU+tIHaj\nNfiF6CJ10/XSeXD9mEe7IPTeRgB0VGFicA0mKGz7cyikhN6n1EuTkjvGDGFYF3gu\nDg4nnm/UH3o29JmWkH/JjKQrkc1AvglSZGP49ZH9lLjD9jduJJJu3Mjl70WFLWZh\npEwTNm7RAgMBAAECggEACDi9szxSfQSMqJunOircj+Ru80vXxnqiPTaH/oMcf/l2\nfzx56g7UaNXFqeU/GJ3nT+/BXVfku1O47swSXw3zzLORuWer/bYsn2Zq8ieIyICz\n8+0V2B/K7uxNH/st3jvbc0WlmiQ+xl1givatRcViIwLmYCak7DgtHYTT39/iKoTb\nA3IXcZ9Am8mfZ778PMaUSvdW+JDTFjYsngDa55frBARMCne7D8uXQSbPB0ZA+oQR\n5UFwJekq7pcn+yuYf8S2Acs5/0OEyWsrrOvgHoP4fkzh2mH/0OfkzM6pf47mNlf3\nh8xqO8ia1++1QJgFuvYaMcAB9GtAghyrLe5IejohyQKBgQC7bQksHGWm9oEcIo97\nbfDiNQHQezQ9/em+lVmOO0qJBniXQn8oOIAv4sdHaeZFxjmzEE6y5v3ygplhRCY4\niAUBMkWjyVwaiDZxTVD0RIcJYnsixnSkANckhMAZlBSwtj01VsPVmWu+u0LvkEXa\nWOk6Uxf9iCsyqo8CXdlEe5AFzwKBgQC35gxTkbKM1eIlVLwxQeFTLbnhQqkG/9xX\n1bsX//nuIf/kNObeOsDmzFH9aMcV2WhP0bmicb6TDR93psL4z8W1r6UjiK57djLW\nAByaT1HNakL48RXCewEE/rl1mJ1dtXpwdrSDGiS3NNnVdubX92701u0c9lD/9cs2\nr+bEAnAJXwJ/KnaJnXTRkwJGPhmWaGCAMr/PqWxAacsdKhCsOY01VdYhfCOUq4gh\ngrfebk+P3D8M04TeT6oF3uu31FGcVzJ578tz+6ejNl+l9gWOUck0zuuA+l/8DSwj\nkiKBY0opZd/j/jGqLLqVrqC+iYgmS1HZhV1OEiLHprL9s4uPrfRQrQKBgQC3tHuD\nz/wJbG/o0ujcW+93ZCpXuHuZnmbC56Nqqi9Fj3lMwvwN66tf46PT/aNDVFc7xUon\n2HCD/Yv9vvzuCMB8auYQxS1n7/+Af8QS8kHJbelRPaR7Dt1J3BvwOXCad/vD9REG\nFkuvKICjGZApFegldb6QPA9WYneKPdXM4JKDCQKBgHE3WybXnrjc2DMvZZvlbD6d\n2z+ZWaYO7/KCFYl6w3aTefu6TWcw/M79j2tiO6OdnGivOX1iy19tV2zyDjhGVojD\numJe/ydQDEi5/qVsuiBeW7JqDYoXit+jD/b1G0lbSgIJMnwZ9k/Uk0ZxRcBjGdqw\nrKmzFou0z9c32gmFb/oR\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_PROJECT_NUMBER = process.env.GOOGLE_PROJECT_NUMBER
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID

const getCalendar = ((req, res) => {
  const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
  )
  
  const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
  })

  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify(result.data.items));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  })
})

const getSports = ((req, res) => {
  try {
    db.all('SELECT * FROM sports ORDER BY hours', (err, rows) => {
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

const createSport = ((req, res) => {
  try {
    req.setEncoding('utf8')

    db.run('INSERT INTO sports(title, jour, hours, infos) VALUES(?, ?, ?, ?)', [req.body.title, req.body.jour, req.body.hours, req.body.infos], (err, row) => {
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

const deleteSport = ((req, res) => {
  try {
    db.run('DELETE FROM sports WHERE id=?', [req.body.id], (err, row) => {
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
  getCalendar,
  getSports,
  createSport,
  deleteSport
}