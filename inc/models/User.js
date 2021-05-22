const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    is_active:{
        type: Boolean,
        default: false
    },
    is_block:{
        type: Boolean,
        default: false
    },
    login_time:{
        type: Number,
        default: 0,
    },
    new_user:{
        type: Boolean,
        default: true
    },
    reset_password:{
        status:{
            type: Boolean,
            default:false
        },
        link: {
            type: String,
            default:''
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("user", UserSchema);
