const router = require('express').Router()
const controller = require('../controllers/articleController')

router.get('/', controller.findAll)
router.get('/:id', controller.findOne)
router.post('/', controller.addArticle)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router