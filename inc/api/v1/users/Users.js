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
 * @Access - Private {{ ONLY ADMIN }}
 * @Method - GET
 * @define - All Users
 * @desc - Get All Users if login Admin Users
 */
router.get('/all')

/**
 * @Access - PUBLIC
 * @Method - POST
 * @define - Forgot Password
 * @desc - Send Random ID to email
 */
router.post('/forgot/password')

/**
 * @Access - PUBLIC
 * @Method - POST
 * @define - New Password=
 * @desc - by URL Unique
 */
router.post('/reset-password/:unique_id')



/**
 * @Access - Private
 * @Method - DELETE
 * @define - Remove Users
 * @desc - by ID
 */
router.delete('/delete/:id')


module.exports = router