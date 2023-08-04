import express from 'express'
import { uploadImage,downloadImage } from '../conroller/imageController.js';
import upload from '../utils/upload.js';

const router=express.Router();

router.post('/upload',upload.single('file'),uploadImage)

router.get('/file/:fileId',downloadImage) //if in address we r using : then it points to variable

export default router