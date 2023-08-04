import express from "express";
import router from "./routes/routes.js";
import cors from 'cors'
import DBConnection from "./database/db.js";
import dotenv from 'dotenv'

const app=express();

const PORT=process.env.PORT || 8000;

app.use(cors());
app.use('/',router)
DBConnection();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
