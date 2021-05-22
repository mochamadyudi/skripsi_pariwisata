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
 * @Access - PUBLIC
 * @Method - GET
 * @define - All Rooms
 */
router.get('/');

/**
 * @Access - PUBLIC
 * @Method - GET
 * @define - get Rooms
 * @desc - by ID
 */
router.get('/:id');





module.exports = router