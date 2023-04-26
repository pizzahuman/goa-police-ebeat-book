const express = require('express');
const {userregister,userregisterotpverification} = require('../Controllers/user.controller');
const userRouter = express.Router();



userRouter.post('/user/register',userregister)
userRouter.post('/user/register/verifyotp',userregisterotpverification)


module.exports = userRouter;