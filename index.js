import express from 'express';
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
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
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