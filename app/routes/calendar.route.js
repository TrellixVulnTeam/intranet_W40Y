const express = require('express')
const router = express.Router()

const  { 
    getCalendar,
    getSports,
    createSport,
    deleteSport
} = require('../controllers/calendar.controller.js')

router.get('/', getCalendar)

router.get('/UAI', getSports)

router.post('/', createSport)

router.delete('/', deleteSport)

module.exports = router