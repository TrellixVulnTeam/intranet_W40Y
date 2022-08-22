const express = require('express')
const router = express.Router()
const multer = require('multer')

const  { 
    getArticles,
    getArticle,
    createArticle,
    modifyArticle,
    deleteArticle
} = require('../controllers/cvis.controller.js')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: fileStorageEngine })

router.get('/', getArticles)

router.get('/:articleID', getArticle)

router.post('/', upload.single('file'), createArticle)

router.put('/', modifyArticle)

router.delete('/', deleteArticle)

module.exports = router