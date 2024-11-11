import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import medRouter from "./routes/medroutes.js";


//app config
const app=express();
const port=4000

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use('/api/medicine',medRouter);
app.use('/images',express.static('uploads'))

app.get('/',(req,res)=>{
  res.send('API is working')
});

app.listen(port,()=>{
    console.log(`Server is successfully running on the port ${port}`);
})
