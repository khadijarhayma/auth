const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    lastname: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
    
      },
    email: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        
      },
    prix: {
      type: String,
     
    },
    password: {
        type: String,
        required: true,
      },
      isdoctor: {
        type: Boolean,
       
      },
      isadmin: {
        type: Boolean,
      },
     
      spécialité: {
        type: String,
        
      },
      adress: {
        type: String,
        
      },
      timeWork: {
        type: String,
       
      },
     domicile: {
        type: Boolean,
       
      },
     rate: {
        type: String,
      
      },
  });
  
  module.exports = user = mongoose.model("user", userSchema);