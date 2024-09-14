import express from 'express';
import connectDB from './db/connectDB';
import dotenv from "dotenv";
import bodyParser from "body-parser"
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRoute from "./routes/user.route"
import restaurantRoute from "./routes/restaurant.route"
import menuRoute from "./routes/menu.route"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


//default middleware for any mern project
app.use(bodyParser.json({limit:'10mb'}))
app.use(express.urlencoded({extended:true,limit:'10mb'}))
app.use(express.json())
app.use(cookieParser())
const corsOptions ={
    origin : "http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions))

//api
app.use("/api/v1/user", userRoute)
app.use("/api/v1/restaurant",restaurantRoute)
app.use("/api/v1/menu",menuRoute)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server listen at port: ${PORT}`)
})