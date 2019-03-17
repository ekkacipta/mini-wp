const router = require('express').Router()
const controller = require('../controllers/articleController')
const images = require('../helpers/image')

router.get('/', controller.findAll)
router.get('/:id', controller.findOne)
router.post('/', images.multer.single('image'), images.sendUploadToGCS, controller.addArticle)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router