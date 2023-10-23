import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express()
dotenv.config();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
  
//middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/auth",authRoute)
app.use("/users",usersRoute)
app.use("/hotels",hotelsRoute)
app.use("/rooms",roomsRoute)

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong!"
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    });
})

app.use(express.static(path.join(__dirname,"./frontEnd_BookingApp/build")));

app.get("*",function(_,res){
     res.sendFile(path.join(__dirname,"./frontEnd_BookingApp/build/index.html"), function(err){
        res.status(500).send(err);
     });
})

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    connect();
    console.log("connected to backend..");
})



 


 