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
 * @Method - GET
 * @define - get Profiles
 * @desc - Access Account User
 */
router.post('/');

/**
 * @Access - Private
 * @Method - PUT
 * @define - Access Account User
 * @desc - Update Full name
 */
router.put('/fullname');

/**
 * @Access - Private
 * @Method - PUT
 * @define - Access Account User
 * @desc - Update Contact
 */
router.put('/contact');

/**
 * @Access - Private
 * @Method - PUT
 * @define - Access Account User
 * @desc - Update Location
 */
router.put('/location');

/**
 * @Access - Private
 * @Method - PUT
 * @define - Access Account User
 * @desc - Update bio
 */
router.put('/bio')

/**
 * @Access - Private
 * @Method - PUT
 * @define - Access Account User
 * @desc - Update twitter
 */
router.put('/twitter');

/**
 * @Access - Private
 * @Method - PUT
 * @define - Access Account User
 * @desc - Update facebook
 */
router.put('/facebook');

/**
 * @Access - Private
 * @Method - PUT
 * @define - Access Account User
 * @desc - Update Instagram
 */
router.put('/instagram');



module.exports = router