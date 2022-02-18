const express = require('express')
const router = express.Router()
const uploadController = require('../controllers/upload')
const upload = require('../middleware/upload')
const fetchImagesController = require('../controllers/fetchImages')

router.get('/upload', fetchImagesController.fetchImages)
router.post('/upload', upload.single('images'), uploadController.uploadFiles)

module.exports = router
