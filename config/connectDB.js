//import mongoose
const mongoose= require("mongoose");

const connectDB =async()=>{
    try {
        await mongoose.connect("mongodb+srv://khadija:123456k@cluster0.zrmrg.mongodb.net/projet?retryWrites=true&w=majority");
        console.log("DB is connected");
    }
    catch(error){
        console.log("error");
    }
}
module.exports=connectDB;


