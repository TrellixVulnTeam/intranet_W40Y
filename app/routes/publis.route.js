const express = require('express')
const router = express.Router()

const  { 
    getPublisType,
    getPublisStrass,
    getPubli,
    getLatestPubli,
    createPubli,
    modifyPubli,
    deletePubli 
} = require('../controllers/publis.controller.js')

router.get('/type/:publisType', getPublisType)

router.get('/strass/:publisStrass', getPublisStrass)

router.get('/id/:publisID', getPubli)

router.get('/', getLatestPubli)

router.post('/', createPubli)

router.put('/', modifyPubli) 

router.delete('/', deletePubli)

module.exports = router