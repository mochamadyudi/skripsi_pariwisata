const mongoose = require("mongoose");

//Create reference to user model, associated with _id in database
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    fullname:{
        type: String
    },
    contact:{
        type: Number
    },
    location: {
        rt:{
            type: String,
        },
        rw:{
            type: String
        },
        kode_post:{
          type: String
        },
        kelurahan:{
            type: String
        },
        kecamatan:{
            type: String
        },
        kabupaten:{
            type: String
        },
        coordinat:{
            latitude:{
                type: String
            },
            longitude:{
                type: String
            }
        }
    },
    bio: {
        type: String
    },
    social: {
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
