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
 * @define - Create Travel
 * @desc - Get All Users if login Admin Users
 */
router.post('/create');

/**
 * @Access - Private {{ ONLY ADMIN }}
 * @Method - POST
 * @define - upload Image
 */
router.post('/upload/image');

/**
 * @Access - PUBLIC
 * @Method - GET
 * @define - get Travel
 * @desc - All
 */
router.get('/all');

/**
 * @Access - PUBLIC
 * @Method - GET
 * @define - Get Travel
 * @desc - by ID
 */
router.get('/:id');


/**
 * @Access - Private {{ ONLY ADMIN }}
 * @Method - PUT
 * @define - Update Travel
 * @desc - by ID
 */
router.put('/update/:id')

/**
 * @Access - Private {{ ONLY ADMIN }}
 * @Method - DELETE
 * @define - Remove Travel
 * @desc - All
 */
router.delete('/delete/all')

/**
 * @Access - Private {{ ONLY ADMIN }}
 * @Method - DELETE
 * @define - Remove Travel
 * @desc - by ID
 */
router.delete('/delete/:id')

module.exports = router