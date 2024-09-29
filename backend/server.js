import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js';
import connectCloudinary from './Config/cloudinary.js';
import userRouter from './Routes/userRoutes.js';
import productRoute from './Routes/productRoutes.js';
import cartRouter from './Routes/cartRoute.js';
import orderRouter from './Routes/orderRoute.js';


//App config
const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary()

//Middleware
app.use(express.json());
app.use(cors());


//api endpoints
app.get('/',(req,res)=>{
    res.send("API working");
})
app.use('/api/user',userRouter);
app.use('/api/product',productRoute);
app.use('/api/cart', cartRouter);
app.use('/api/order',orderRouter)


//start server
app.listen(port,()=>{
    console.log("App is running at: "+port);
})