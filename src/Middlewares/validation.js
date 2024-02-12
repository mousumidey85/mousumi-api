const errorFunction = require("../helper/errorFunction");
const jwt_decode = require('jwt-decode');
const UserModel = require("../Models/WebModels/UserModel");
const constants = require("../helper/constants");

const { getSuccessResponse, SendMobileResponse, ApiResponse } = require("../helper/success");
// joi validation
exports.customValidation = (joiValidator, payloadType, isMobile = false) => {
    // payload type can be body or query as of now
    return (req, res, next) => {
        const payload = req[payloadType]
        const { error } = joiValidator.validate(payload);
        if (error) {
            if (!isMobile) {
                res.status(403);
                return res.json(
                    errorFunction(false, error.message.replaceAll('"', ""))
                )
            }
            else {
                return SendMobileResponse(res, null, error.message.replaceAll('"', ""), false, 422)
            }
        }
        else {
            next();
        }
    }
}








