import express from 'express';
import connectDB from './db/connectDB';
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server listen at port: ${PORT}`)
})
