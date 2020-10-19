const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json("Este es social");
});

module.exports = router;