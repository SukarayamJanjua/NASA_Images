import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Mongo db is already connected")
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI , {
            dbName: "NASA_Image",
            useNewUrlParser: true,
            useUnifiedTopology : true,
        })
        isConnected = true;
        console.log("mongodb connected!");
    }
    catch(error){
        console.log(error);
    }
}