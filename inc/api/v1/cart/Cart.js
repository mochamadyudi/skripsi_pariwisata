/**
 * @Author - Mochamad Yudi Sobari
 * @contact - myudisobari12@gmail.com
 * @version - 0.0.1
 * @type - Development
 */

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

/**
 * @Access - Private
 * @Method - POST
 * @define - Create Cart
 */
router.post('/');

/**
 * @Access - Private
 * @Method - GET
 * @define - Get Cart
 * @desc - Get Token if Login
 */
router.get('/me');





module.exports = router