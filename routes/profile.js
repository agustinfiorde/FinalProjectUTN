const express = require('express');
const router = express.Router();
const ProfileController = require('./../controllers/profile.controller');

router.get("/", ProfileController.getProfile);

module.exports = router;