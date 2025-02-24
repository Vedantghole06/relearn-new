import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Update this to match your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => { console.log("Connected to database"); })
    .catch((err) => { 
        console.error("Error connecting to database:", err);
        process.exit(1);
    });

app.use('/api/users', userRoutes);

app.listen(PORT, () => { console.log("Server is running on port", PORT); });