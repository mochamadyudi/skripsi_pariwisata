const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Option to not delete posts, this is why we're using this
const RoomSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
    limit: {
        type: Number,
        default: 1
    },
    price: {
        type: Number
    },
    tipeKamar: {
        type: String
    },
    info_kamar: {

        luas_kamar: {
            type: Number,
            default: 0
        },
        tamu: {
            type: Number,
            default: 0
        }
    },
    fasilitas_kamar_mandi: {
        air_panas: {
            type: Boolean,
            default: false
        },
        shower: {
            type: Boolean,
            default: false
        },
        hair_driyer: {
            type: Boolean,
            default: false
        },
        pribadi: {
            type: Boolean,
            default: false
        }
    },
    fasilitas: {
        ac: {
            type: Boolean,
            default: false
        },
        tv: {
            type: Boolean,
            default: false
        },
        bedtype: {
            type: String,
            default: false
        },
        wifi: {
            type: Boolean,
            default: false
        },
        other: {
            type: Array,
            default: []
        }
    },
    wishList: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    rating: {
        data: [
            {
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'users'
                }
            }
        ]
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Room = mongoose.model("room", RoomSchema);
