import { response } from "express";
import File from "../modals/file.js"
import dotenv from 'dotenv'
dotenv.config()
export const uploadImage= async (req,resp)=>{

    const fileObj={
        path:req.file.path,
        name:req.file.originalname
    }   
    try {
           const file= await File.create(fileObj) ;
           console.log(file);
            resp.status(200).json({path:`${process.env.BASE_URL}/file/${file._id}`})
        } catch (error) {
            console.error(error.message)
            response.status(500).json({error:error.message})
        }
}

export const downloadImage=async (req,resp)=>{
    try{
        const file=await File.findById(req.params.fileId)
        file.downloadContent++

        await file.save();
        
        resp.download(file.path,file.name)
    }catch(error){
        console.error(error.message)
        response.status(500).json({error:error.message})
    }
}
