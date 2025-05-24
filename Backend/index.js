import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './DB/db.js';
import userRouter from './Routers/user.router.js';
import feedbackRouter from './Routers/feedback.router.js';

dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5432;

app.use('/api/users', userRouter);
app.use('/api', feedbackRouter);

app.get('/', (req, res)=>{
    res.status(201).send("hello world");
});

app.listen(port,()=>{
    console.log(`App is running at port ${port}`);
    console.log(`http://localhost:${port}`);
})