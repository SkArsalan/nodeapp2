const express = require('express');
const router = express.Router();
const multer = require('multer');
const {BlobServiceClient} = require("@azure/storage-blob")
var storage = multer.memoryStorage()

router.post('/uploadfileonAzure',async(req,res,next)=>{
    const blobSvc =  azure.createBlobService(process.env.AZURE_STORAGE_KEY);
    let fileName = uuid().toString() + 'jpg';
    let rawdata = req.body.file
    console.log(rawdata);
    // let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
    // let types = matches[1]
    // let buffer = new Buffer(matches[2],base64)
    await  blobSvc.createBlockblobformText('container01',fileName,buffer,{
        contentType: type
    },function(error,result,response){
            if(error){
                fileName ="default.jpg"
            }
        });
        const fileUrl = `https://backend0122.blob.core.windows.net/container01/${fileName}`
    res.status(200).json({
        message:"file upload Successfully",
        data:fileUrl
    })
})



module.exports = router