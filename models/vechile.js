const mongoose = require("mongoose")
const vechileSchema = mongoose.Schema({
    vechileName: {
        type: String,
        required: [true, "vehicle name are required"]
    },
    vechileModel:  {
        type: String,
        required: [true, "models are required"]
    },
    vechileClassification:  {
        type: String,
        required: [true, "classification are required"]
    },
    vechileprice: {
        type: Number,
        required: [true,"Price of the vehicle is required"],
        min:[3000,"Price Should be minimum of 3000$ "],
        max:[6000,"Price Cannot be greater than 6000$ "]


    }
})
module.exports = mongoose.model("vechile", vechileSchema)