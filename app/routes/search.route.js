const express = require('express')
const router = express.Router()

const {
    getSearch
} = require('../controllers/search.controller.js')

router.get('/:searchWord', getSearch)

module.exports = router