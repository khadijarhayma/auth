//import express
const express= require("express");
const connectDB = require('./config/connectDB');
//initialisation
const app = express();
//import dotenv
require ("dotenv").config();
//connect to DB
connectDB();
//router
app.use(express.json());
app.use("/user",require("./routes/user"));
//creation server
app.listen(process.env.PORT,(err) =>{
    err?console.log("err"):console.log(`server is running ...${process.env.PORT}`)
});