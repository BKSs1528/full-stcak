const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ISBN_number:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    published_date:{
        type:String,
        required:true,
        default : new Date()
    },
    Publisher:{
        type:String,
        required:true
    }
})

const booModel = new mongoose.model("bookAPI",bookSchema)

module.exports = booModel;