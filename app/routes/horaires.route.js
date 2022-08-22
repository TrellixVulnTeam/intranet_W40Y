const express = require('express')
const router = express.Router()

const  { 
    getHoraires,
    modifyHoraires
} = require('../controllers/horaires.controller.js')

router.get('/', getHoraires)

router.put('/', modifyHoraires)

module.exports = router