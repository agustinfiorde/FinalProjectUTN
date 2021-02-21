const express = require('express');
const router = express.Router();

const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);

const FileController = require('../controllers/file.controller');

router.post('/:id', upload.array("img"), FileController.create);


module.exports = router;

