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
 * @Method - POST
 * @define - Create Ads
 */
router.post('/');


/**
 * @Access - public
 * @Method - GET
 * @define - get Ads
 * @desc - ALL
 */
router.get('/');

/**
 * @Access - public
 * @Method - POST
 * @define - get Ads by villa ID
 */
router.get('/villa/:id');

/**
 * @Access - Private
 * @Method - POST
 * @define - Verify Request Ads
 */
router.post('/user/verify');

/**
 * @Access - Private
 * @Method - POST
 * @define - Block Request Ads
 */
router.post('/user/block');

/**
 * @Access - Private
 * @Method - GET
 * @define - get LOGS ALL
 */
router.get('/log/all');

/**
 * @Access - Private
 * @Method - GET
 * @define - get log
 * @desc - by ID
 */
router.get('/log/:log_id');


module.exports = router