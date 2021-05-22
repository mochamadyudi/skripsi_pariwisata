/**
 * @Author - Mochamad Yudi Sobari
 * @contact - myudisobari12@gmail.com
 * @version - 0.0.1
 * @type - Development
 */

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {
    SignUp,
    SignIn,
    LoadUser
} = require('../../../controller/ControllerAuth')
const auth = require('../../../middleware/auth')
/**
 * @Access - Private
 * @Method - GET
 * @define - Load User
 * @desc - Get Token IF Login
 */

router.get("/load-user",auth,LoadUser);

/**
 * @Access - Public
 * @Method - POST
 * @define - User Login
 */

router.post(
    "/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a password with six or more characters").exists()
    ],SignIn);

/**
 * @Access - Public
 * @Method - POST
 * @define - Register User
 */
router.post("/register",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a password with six or more characters").isLength({min: 6})
    ],SignUp);

module.exports = router;
