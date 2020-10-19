const express = require('express');
const router = express.Router();
const DogController = require('../controllers/dog.controller');

const { validateCreate, validateUpdate } = require('./../middlewares/dog.middleware');

router.get('/', DogController.getAll);
router.get('/:id', DogController.getOne);
router.post('/', validateCreate, DogController.create);
router.put('/:id', validateUpdate, DogController.update);
router.delete('/:id', DogController.deleteController);

module.exports = router;

