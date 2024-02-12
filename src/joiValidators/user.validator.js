const joi = require("joi");
const constant = require("../helper/constants");
exports.loginValidator = joi.object({
    email: joi.string().email().trim(true).required(),
    password: joi.string().min(8).max(14).trim(true).required(),
    rememberMe: joi.boolean(),
    device: joi.string().min(4).max(50).trim(true),
    location: joi.string().min(4).max(50).trim(true),
    recaptcha:joi.string().trim(true).optional(),
    token:joi.string().trim(true).optional(),
    captchaStatus:joi.boolean()
})

exports.logoutValidator = joi.object({
    id: joi.string().length(24).optional()
})

exports.registerValidator = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().trim(true).required(),
    companyName: joi.string().required(),
    dotNumber: joi.string().min(5).max(8).pattern(/^[0-9]+$/).required(),
    timeZone: joi.string().required(),
    // phoneNumber : joi.string().length(10).pattern(/^[0-9]+$/).required(),
    address:joi.string().required(),
    phoneNumber: joi.string().required(),
    password: joi.string().min(6).trim(true).required(),
    confirmPassword: joi.string().required().valid(joi.ref('password')),
    policy: joi.boolean().invalid(false).required(),
    token:joi.string().trim(true).optional()
})

exports.verifyUserMailValidator = joi.object({
    id: joi.string().length(24).required(),
    token: joi.string().length(50).required()
})

exports.verifyActiveUserOtpValidator = joi.object({
    userId: joi.string().length(24).required(),
    otp:joi.string().length(6).pattern(/^[0-9]+$/).required(),
})

exports.enableTwoFactorAuthenticationValidator = joi.object({
    userId: joi.string().length(24).required(),
    isEnabled:joi.boolean().required(),
})

exports.changePasswordValidator = joi.object({
    oldPassword: joi.string().min(8).trim(true).required().label("Old Password"),
    newPassword: joi.string().disallow(joi.ref('oldPassword')).min(8).trim(true).required().label("New Password")
        .options({
            messages: {
                'any.only': '{{#label}} should not be same'
            }
        })

})

exports.generalEmail = joi.object({
    email: joi.string().email().trim(true).required(),
})

exports.updateUserValidator = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    phoneNumber: joi.string().required(),
    landingPage: joi.string().valid("/logs", "/dashboard", "/driver-hos").required(),
    companyId: joi.string().length(24).required(),
    _id: joi.string().length(24).required(),

})

exports.shareLocation = joi.object({
    // driverId: joi.string().required(),
    tokenId: joi.string().required()
})

exports.createSystemUser = joi.object({
    id: joi.string(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required(),
    assignedGroup: joi.string().allow(null, "").optional(),
    password: joi.string().min(8).trim(true).optional(),
    accessAllCompanies: joi.boolean().allow(''),
    timeZone: joi.string().allow(''),
    role: joi.string().allow('').valid(constant.ROLES.SYSTEM_TECHNICIAN, constant.ROLES.SYSTEM_ADMINISTRATOR, constant.ROLES.SYSTEM_SUPER_ADMIN, constant.ROLES.SYSTEM_SALES),
    twoFactorEnabled:joi.boolean().optional()
})

exports.getDisplayCompanyValidator = joi.object({
    id : joi.number().integer().min(1).max(1000).required(),
})

exports.resendVerificationCodeValidation = joi.object({
        email: joi.string().email().trim(true).required()
})

exports.resetPasswordValidation= joi.object({
        email: joi.string().trim(true).optional(),
        confirmPassword: joi.string().trim(true).optional(),
        newPassword: joi.string().trim(true).optional()
        // confirmPassword: joi.string().min(8).max(14).pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,14}$/).trim(true).required(),
        // newPassword: joi.string().min(8).max(14).pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,14}$/).trim(true).required()
})
exports.checkEmailValidator = joi.object({
    email: joi.string().email().trim(true).required()

})
