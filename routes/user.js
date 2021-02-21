const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { validateCreate, validateUpdate } = require('./../middlewares/user.middleware');
const { upload } = require("../utils/multer");

router.get('/', UserController.getAll);//ok
router.post('/', validateCreate, UserController.createUser);//ok
router.get('/confirm', UserController.confirmEmail);
router.put('/:id', validateUpdate, UserController.updateUser);//ok
router.delete('/:id', UserController.deleteUser);//ok

module.exports = router;