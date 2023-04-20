const jwt = require('jsonwebtoken');
const { formResponse } = require('../helpers/response');
const httpStatusCodes = require('../constants/http-status-codes');
const jwtSecKey = process.env.JWT_SEC_KEY;

const authenticateToken = async (req, res, next) => {
    const token = req.cookies.token;
    if (token == null) return res.status(httpStatusCodes[401].code)
        .json(formResponse(httpStatusCodes[401].code, "Token not found"));
    try {
        const data = await jwt.verify(token, jwtSecKey);
        req.userId = data.id;
        req.userRole = data.role;
        return next();
    } catch (error) {
        res.status(httpStatusCodes[401].code)
            .json(formResponse(httpStatusCodes[401].code, "Token Expired or Invalid"))
        return;
    }
};

module.exports = authenticateToken;