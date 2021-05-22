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
 * -------------------------------------------------
 * VILLA
 ---------------------------------------------------*/
/**
 * @Access - Private
 * @Method - GET
 * @desc - Access Account Villa
 */
router.get('/me');

/**
 * @Access - PUBLIC
 * @Method - GET
 * @define - get Villa
 * @desc - by ID
 */
router.get('/:id');

/**
 * @Access - Private
 * @Method - POST
 * @desc - Create Villa
 */
router.post('/create');


/**
 * -------------------------------------------------
 * ROOMS
 ---------------------------------------------------*/

/**
 * @Access - Private
 * @Method - POST
 * @desc - Create Room
 */
router.post('/room/new');

/**
 * @Access - Private
 * @desc - Upload Image
 * @define - Rooms
 */
router.post('/room/upload/image');


/**
 * @Access - Public
 * @method - GET
 * @desc - Get Rooms
 * @define - All
 */
router.get('/room/all');

/**
 * @Access - Public
 * @desc - Get Rooms
 * @define - by ID
 */
router.get('/room/id/:id');

/**
 * @Access - Private
 * @desc - Update Room
 * @define - by ID
 */
router.put('/room/update/:id');


/**
 * @Access - Private
 * @desc - Delete Room
 * @define - All
 */
router.delete('/room/delete/all');

/**
 * @Access - Private
 * @desc - Delete Room
 * @define - by ID
 */
router.delete('/room/delete/:id')



module.exports = router;
