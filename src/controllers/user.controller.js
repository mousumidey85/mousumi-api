require("dotenv").config();
const jwt_decode = require('jwt-decode');
var ip = require('ip');


// Models
const UsersModel = require("../Models/WebModels/UserModel");



const initUserController = () => {
    const loginUser = async (req, res) => {
        try {
            const { email, password, token } = req.body;
            res.status(statusCode).send(body);
        } catch (err) {
            console.log(err);
            res.status(500).json(errorFunction(false, "Some error Occured while logging in"));
        }
    }


    const createUser = async (req, res) => {
        const { firstName, lastName, email, address, phone, password } = req.body;
        try {

            return res.status(403).send(body);
        
        } catch (err) {
            res.status(500).json(errorFunction(false, "Account Not created"))
        }
    }
  


    return {
        loginUser,
        createUser
    }
}

module.exports = initUserController;
