import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import userRouter from './routes/user.route.js';


dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy: false // if fronted is in different domain it will show error 
}));

app.use(cookieParser());


const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('An Binkeyit Web is running');
});

app.use('/api/user', userRouter);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});