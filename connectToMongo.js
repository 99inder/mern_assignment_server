import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();

const mongoURI = "mongodb+srv://inder:inder@cluster0.rm6nrbr.mongodb.net/mern-assignment?retryWrites=true&w=majority";

const connectToMongo = async () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!")
}

export default connectToMongo;