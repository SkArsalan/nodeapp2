const express = require('express');
const multer = require('multer');

const {addImagebanner,addCoureseImage,addlessonImage} = require('../controller/firebaseUser_controller');
const {UploadVideoOnAzure} = require('../controller/azure_controler');
const router = express.Router();
// Setting up multer as a middleware to grab photo uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage },  {limits: { fileSize: 200000000 }},);
// POST - Add Image to Cloud Storage

router.route('/addImage').post(upload.single('file'), addImagebanner);
router.route('/UploadVideoOnAzure').post(upload.single('image'), UploadVideoOnAzure);
router.route('/addCoureseImage').post(upload.single('file'), addCoureseImage);
router.route('/addlessonImage').post(upload.single('file'), addlessonImage);

module.exports = router