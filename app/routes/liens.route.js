const express = require('express')
const router = express.Router()

const  { 
    getLiens,
    createLien,
    deleteLien
} = require('../controllers/liens.controller.js')

router.get('/', getLiens)

router.post('/', createLien)

router.delete('/', deleteLien)

module.exports = router