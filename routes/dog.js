const express = require('express');
const router = express.Router();
const DogController = require('../controllers/dog.controller');

const { validateCreate, validateUpdate } = require('./../middlewares/dog.middleware');

// router.get('/', DogController.getAll);//ok
router.get('/:id', DogController.getOne);
// router.post('/', validateCreate, DogController.create);//ok
// router.put('/:id', validateUpdate, DogController.update);//arreglar
// router.delete('/:id', DogController.deleteController);//arreglar

module.exports = router;

