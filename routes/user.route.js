import { Router } from "express";
import {  
    forgotPasswordController, 
    loginUserController, 
    logoutUserController,
    refreshTokenController,
    registerUserController, 
    resetPasswordController, 
    updateUserDetailsController, 
    uploadAvatarController, 
    verifyEmailController, 
    verifyForgotPasswordOtpController} from "../controllers/user.controller.js";

import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();

userRouter.post('/register', registerUserController);
userRouter.post('/verify-email', verifyEmailController);
userRouter.post('/login', loginUserController);
userRouter.get('/logout', auth, logoutUserController);
userRouter.put('/update-avatar', auth,upload.single('avatar'), uploadAvatarController);
userRouter.put('/update-user', auth, updateUserDetailsController);
userRouter.put('/forgot-password', forgotPasswordController);
userRouter.put('/verify-otp', verifyForgotPasswordOtpController);
userRouter.put('/reset-password', resetPasswordController);
userRouter.post('/refresh-token', refreshTokenController);


export default userRouter;