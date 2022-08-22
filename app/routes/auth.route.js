const express = require('express')
const router = express.Router()

const  {
    getUser,
    setToken
} = require('../controllers/auth.controller.js')

router.get('/', getUser)

router.post('/', setToken)

module.exports = router