const streamifier = require('streamifier');
const multipart = require('parse-multipart');
const azure = require('@azure/storage-blob');

exports.UploadVideoOnAzure =   (req,res ) =>{
  var file = req.body.image
  var boundary = multipart.getBoundary(req.headers['content-type']);
  var parts = multipart.Parse(file, boundary);

//   var filedata = parts[0].data;         // Image buffer data
//   var filename = parts[0].filename;     // testImage.png
//   console.log("parts[0].data");
//   console.log(parts[0].data);
//   console.log("parts[0].filename");
//   console.log(parts[0].filename);
  const accountname ="backend0122";
  const key = " 4xzTLeLXbdWUI5LwartowA6qQNoGGGSyJkbMbYKU5FOj8UVO7aXLrN1PRIqzONIA65SijJzu7olF+ASt/GSxMg==";
  const containerName=" container01";
  const blobClient  =azure.createBlobService(accountname,key);
//  # set blob content type
  var options = {
    contentSettings:{contentType: parts[0].type}
  };
  blobClient.createBlockBlobFromStream(containerName,file,streamifier.createReadStream(),options,(err,result)=>{

    if (!err) {
        console.log("Image upload successful", result);

    } else{

      throw err;
    }
  })
res.json({
    success:true,
    message:"upload Video Successfully",
    data:result
})
};