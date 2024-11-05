const mongoose =require('mongoose')

const urlSchema =new mongoose.Schema({
    
    originalUrl:{
        type:String,
        required :[true, "Url is required "],
        unique: true
    },
    shortId:{
        type:String,
        required :[true, "Short url should be provided and unique"],
        unique: true
    }
})
const urlModel = mongoose.model("Url",urlSchema)
module.exports= urlModel