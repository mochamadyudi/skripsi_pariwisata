/**
 * @author - Mochamad Yudi Sobari
 * @desc - Middleware Authentication
 */

const jwt = require("jsonwebtoken");
require('dotenv').config();
module.exports = (req, res, next)=> {
    //Pull token from header
    const token = req.headers.authorization;
    console.log(token)
    //Check if there isn't a token
    if (!token) {
        return res.status(401).json({ message: "No Token" });
    }

    //Verify if there is a token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_PUBLIC);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token isnt valid!" });
    }
};