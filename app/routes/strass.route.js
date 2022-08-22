const express = require('express')
const router = express.Router()

const {
    get1Strass,
    getStrass
} = require('../controllers/strass.controller.js')

router.get('/:strassID', get1Strass)

router.get('/', getStrass)

module.exports = router