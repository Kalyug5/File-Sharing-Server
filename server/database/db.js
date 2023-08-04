import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()



const DBConnection= async ()=>{
    const DB_URI=process.env.DB_URI
    try{
        await mongoose.connect(DB_URI,{useNewUrlParser:true})  //to make sure that you have to parse from the new url
        console.log("Database connected succesfully..")

    } catch(err){
        console.error('error while connecting with database',err.message)
    }
}

export default DBConnection