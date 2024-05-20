import React from "react";
import mongoose from "mongoose";

let isConnected = false;
export default async function connectDB(){
    try {
        if(!isConnected){
            await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Successfully connected to MONGODB :)");
            isConnected = true;
        }
        if(isConnected == true){
            console.log("Mongodb already connected")
        }
    }
    catch (err) {
        console.log(err);
    }
}