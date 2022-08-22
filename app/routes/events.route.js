const express = require('express')
const router = express.Router()

const { 
    getEvents,
    getEvent,
    createEvent,
    modifyEvent,
    deleteEvent 
} = require('../controllers/events.controller.js')

router.get('/', getEvents)

router.get('/:eventID', getEvent)

router.post('/', createEvent)

router.put('/', modifyEvent) 

router.delete('/', deleteEvent)

module.exports = router