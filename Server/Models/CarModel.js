const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    carModel: String, 
    carName: String, 
    sittCap: Number, 
    trip: String, 
    startPoint: String, 
    destPoint: String, 
    goingTime: String, 
    returnTime: String, 
    days: Number, 
    price: Number, 
    desc: String, 
    img: String
})

const CarModel = mongoose.model("cars", CarSchema)
module.exports = CarModel