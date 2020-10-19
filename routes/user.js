const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { validateCreate, validateUpdate } = require('./../middlewares/user.middleware');

router.get('/', UserController.getAll);
router.get('/dogs', UserController.getAllUsersAndDogs);
router.get('/:id', UserController.getOne);
router.post('/', validateCreate, UserController.createUser);
router.put('/:id', validateUpdate, UserController.updateOwner);
router.delete('/:id', UserController.updateOwner);

module.exports = router;