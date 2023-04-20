const jwt = require('jsonwebtoken');
const { formResponse } = require('../helpers/response');
const httpStatusCodes = require('../constants/http-status-codes');
const Users = require('../models/user.model');
const jwtSecKey = process.env.JWT_SEC_KEY;
// const { compareSync } = require("bcryptjs");


const tokenAuthentication = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token);
    if (token == null) return res.status(httpStatusCodes[401].code)
        .json(formResponse(httpStatusCodes[401].code, "Token not found"));
    try {
        let getServerToken = await Users.findOne({ "token": token });
        if (!getServerToken) {
            res.status(httpStatusCodes[401].code)
                .json(formResponse(httpStatusCodes[401].code, "Token Expired or Invalid"))
            return;
        }
        const data = await jwt.verify(token, jwtSecKey);
        req.userId = data.id;
        req.userRole = data.role;
        return next()
    } catch (error) {
        console.log(error)
        res.status(httpStatusCodes[401].code)
            .json(formResponse(httpStatusCodes[401].code, "Token Expired or Invalid"))
        return;
    }
}

module.exports = tokenAuthentication;