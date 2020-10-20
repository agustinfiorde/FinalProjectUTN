const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { validateCreate, validateUpdate } = require('./../middlewares/user.middleware');
const { upload } = require("../utils/multer");

// router.get('/', UserController.getAll);
// router.get('/dogs', UserController.getAllUsersAndDogsRegistered);
// // router.get('/:id', UserController.getOne);
// router.post('/', validateCreate, UserController.createUser);
// router.get('/confirm', UserController.confirmEmail);
// router.put('/:id', validateUpdate, UserController.updateUser);
// router.delete('/:id', UserController.updateUser);

router.get('/test', upload.single("picture"), UserController.test);

module.exports = router;