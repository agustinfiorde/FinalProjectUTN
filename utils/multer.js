const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);

module.exports = { upload };