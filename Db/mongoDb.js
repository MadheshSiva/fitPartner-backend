const mongoose = require("mongoose")


exports.dbConnection = async() => {
    try{
        await mongoose.connect("mongodb+srv://fitpartner2806:bl8YLYF6Jjuvurqn@cluster0.4bx0tbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected")
    } catch (err) {
        console.log(err)
    }
   
}

