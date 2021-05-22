const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    is_active: {
        type: Boolean,
        default: false
    },
    is_verification: {
        type: Boolean,
        default: false
    },
    location: {
        kecamatan: {
            type: String,
            required: true
        },
        kelurahan: {
            type: String
        },
        kode_pos: {
            type: String,
            required: true
        },
        jalan: {
            type: String
        },
        kampung: {
            type: String
        },
        blok: {
            type: String
        },
        rt: {
            type: String
        },
        rw: {
            type: String
        },
        no: {
            type: String
        }
    },
    contact: {
        type: Number
    },
    bio: {
        type: String
    },
    social: {
        youtube: {
            type: String
        },
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
    images: {
        type: Array,
        default: []
    },
    banner: {
        ads: {
            access:{
                type: Array,
                default: []
            },
            banner_left: {
              type: Array,
              default: []
            },
            banner_right: {
                type: Array,
                default: []
            }
        },
        profiles:{
            type: Array,
            default: []
        }
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users"
            },
            date: {
                type: Date
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Villa = mongoose.model("villa", UserSchema);
