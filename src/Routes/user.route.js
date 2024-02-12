const { Router } = require("express");
const initUserController = require("../controllers/user.controller");
// validation
const {customValidation} = require("../Middlewares/validation");

// validation middlewares
const { loginValidator,
    registerValidator
} = require("../joiValidators/user.validator");

const constants = require("../helper/constants");

const router = Router();

const userRouter = () => {
const {uploadFilesOnS3Bucket, loginUser,createUser,verifyUser, getProfileUser,changePassword,forgotPassword,refreshUserToken, getSystemUsersList, refreshTokenSystemUser, updateProfileUser, createUserBySystem, getUserFromSystem , getDisplayCompanyCnt, getActiveSessionUsersList, activeUserLogout, manyActiveUserLogout, getCompanyDriverMessagesCnt,getActiveUser,verifyActiveUserOtp,enableTwoFactorAuthentication,resetPassword, resendVerificationCode,enableProfileUser ,checkEmail} = initUserController();

router.route("/login").post(customValidation(loginValidator, "body"), loginUser);

router.route("/register").post(customValidation(registerValidator, "body"), createUser);

return router;
}

module.exports = userRouter;
