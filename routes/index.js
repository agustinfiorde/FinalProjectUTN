const express = require('express');
const router = express.Router();

const { secured } = require("../middlewares/auth.middleware");
const fileRouter = require('./file');
const userRouter = require('./user');
const dogRouter = require('./dog');
const socialRouter = require('./social');
const authRouter = require('./auth');
const profileRouter = require('./profile');

router.use('/file', fileRouter);
router.use('/user', userRouter);
router.use('/dog', dogRouter);
router.use('/social', socialRouter);
router.use('/auth', authRouter);//ok
router.use('/profile', secured, profileRouter);//ok

module.exports = router;
