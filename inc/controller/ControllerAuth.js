const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const User =require ('../models/User');
const Carts =require ('../models/Carts');
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
require('dotenv').config();


exports.LoadUser = async (req,res)=> {
    try {
        const user = await User.findById(req.user.id).select("-password");
        console.log(user)
        await res.json(user).status(200);
    } catch (err) {
        console.log(err)
        res.status(401).send("need Authentication");
    }
}

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 * @constructor
 */
exports.SignUp = async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} =req.body;
    try{
        let user = await User.findOne({ email })
        if (user) {
            return res
                .status(400)
                .json({ errors: [{ message: "User already exists" }] });

        }
        //Gravatar
        const avatar = gravatar.url(email, {
            s: "200",
            r: "pg",
            default: "mm"
        });
        //Deklrasi user baru
        user = new User({
            email,
            avatar,
            password
        });

        //salt password, default 10
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        /**
         * Create Carts
         */
        const cart = new Carts({user:user.id});
        await cart.save();

        //Create payload
        res.json({
            success: 200,
            is_active: false,
            msg:'Congratulations, your account has been successfully created!. Please check your inbox a code is sent on your email',
        })

    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 * @constructor
 */
exports.SignIn = async (req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        //Does user exist?
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ message: "Invalid credentials" }] });
        }
        //Check plain text against encrypted password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .json({ errors: [{ message: "Invalid credentials" }] });
        }

        //Create payload
        const payload = {
            user: {
                id: user.id,
                new_user: user.new_user,
                key:process.env.API_KEY,
                is_active:user.is_active
            }
        };
        if (!user.is_active){
            return res.json({
                status_code: 200,
                is_active:user.is_active,
                message:"Verify Your Email Address",
                description:'After registering, you will receive an activation email at the email address you entered during registration. Select the link in the email to activate your account.'
            }).status(200)
        }
        //Expiration date extreme for testing purposes
        jwt.sign(
            payload,
            process.env.JWT_SECRET_PUBLIC,
            {
                expiresIn: 36000
            },
            (err, token) => {
                if (err) throw err;
                res.json({
                    status_code: 200,
                    is_verification: user.is_active,
                    email: user.email,
                    avatar: user.avatar,
                    date: user.date,
                    msg:'Congratulations, your account has been successfully created!. Please check your inbox a code is sent on your email',
                    token
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}


