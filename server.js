/**
 * @desc - Define Library
 */
const express = require('express')
require('dotenv').config()
const path = require('path')
const BodyParser = require('body-parser');
const cors = require('cors');
const {connectDB} = require("./inc/config/db");
const rateLimit = require("express-rate-limit");
const RedisStore = require('rate-limit-redis');


const app = express();

/**
 * @desc - Connect to my Database
 */
connectDB();


app.use(cors());

app.use(BodyParser.json());

/**
 * @desc - Initialize Middleware
 *
 */
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: false}))

app.use((req, res,next) => {
    res.header('Access-control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", 'true');
    next();
})

/**
 * @define - Router Rest API
 * @version - v.0.0.1
 */
app.use('/api/v1/auth',require('./inc/api/v1/authentication/Auth'))
// app.use('/api/v1/ads',require('./inc/api/v1/ads/Ads'));
app.use('/api/v1/profiles',require('./inc/api/v1/profiles/Profiles'))
app.use('/api/v1/rooms',require('./inc/api/v1/rooms/Rooms'))
app.use('/api/v1/travel',require('./inc/api/v1/travel/Travel'))
app.use('/api/v1/users',require('./inc/api/v1/users/Users'))
app.use('/api/v1/villa',require('./inc/api/v1/villa/Villa'))



app.listen(process.env.PORT || 5000, function () {
    console.log(`Apps is Running on PORT = ${process.env.PORT}`)
})
