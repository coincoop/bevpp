import express from 'express';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import Multer from "multer";
import streamifier from "streamifier";
dotenv.config();

import FileUpload from "express-fileupload";
import menuRoute from './routes/MenuRoute.js';
import productRoute from './routes/ProductRoute.js'
import userRoute from './routes/UserRoute.js'
import cartRoute from './routes/CartRoute.js'
import homeRoute from './routes/HomeRoute.js'
import blogRoute from './routes/BlogRoute.js'
import reviewRoute from './routes/ReviewRoute.js'
import cateprodRoute from './routes/CateProdRoute.js'
import ContactRoute from './routes/ContactRoute.js'
import cors from "cors";
import AdMenuRoute from "./routes/AdMenuRoute.js";
import AdProduct from "./routes/AdProductRoute.js"
import AdBlog from "./routes/AdBlogRoute.js";
import AdHome from "./routes/AdHomeRoute.js";
import AdCateProd from "./routes/AdCateProdRoute.js";
import AdReview from "./routes/AdReviewRoute.js";
import AdContact from "./routes/AdContactRoute.js";

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

const app = express();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
async function handleUpload(file, folder) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: folder,
  });
  return res;
}

app.use(cors());

app.post("/upload/menu", upload.single("img"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const folder = "menu"; 
    const cldRes = await handleUpload(dataURI, folder);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
});


app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(AdMenuRoute);
app.use(AdProduct);
app.use(AdHome);
app.use(AdBlog);
app.use(AdCateProd);
app.use(AdReview);
app.use(AdContact);
app.use(menuRoute);
app.use(productRoute);
app.use(homeRoute);
app.use(productRoute)
app.use(userRoute);
app.use(cartRoute);
app.use(blogRoute)
app.use(reviewRoute);
app.use(cateprodRoute);
app.use(ContactRoute);


app.listen(5000, () => {
  console.log('Server listening on port 5000');
});