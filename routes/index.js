const express = require('express');
const router = express.Router();

const { secured } = require("../middlewares/auth.middleware");
const userRouter = require('./user');
const dogRouter = require('./dog');
const socialRouter = require('./social');
const authRouter = require('./auth');
const profileRouter = require('./profile');

router.use('/user', userRouter);
router.use('/dog', dogRouter);
router.use('/social', socialRouter);
router.use('/auth', authRouter);
router.use('/profile', secured, profileRouter);

module.exports = router;
