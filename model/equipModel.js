const mongoose = require("mongoose")

const modelEquip = mongoose.Schema({
    toolName : {
        type : String,
        required : true
    },
    toolHeading : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true,
    },
    imgUrl : {
        type : String,
        required : true
    },
    videoUrl : {
        type : String
    },
    description : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const equipModule = mongoose.model("equipmentData",modelEquip)

module.exports = equipModule