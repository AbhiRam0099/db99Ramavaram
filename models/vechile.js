const mongoose = require("mongoose")
const vechileSchema = mongoose.Schema({
    vechilename: String,
    model: String,
    classification: String,
    price:Number
})
module.exports = mongoose.model("vechile", vechileSchema)