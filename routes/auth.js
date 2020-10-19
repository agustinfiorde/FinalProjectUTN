var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/auth.controller');

router.get('/', AuthController.auth);

module.exports = router;