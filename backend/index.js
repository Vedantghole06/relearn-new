import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import formRoutes from './routes/form.routes.js';
import frontRoutes from './routes/front.routes.js'; // Import front routes

dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both origins
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
app.use('/api/forms', formRoutes);
app.use('/api/front', frontRoutes); // Add front routes

app.listen(PORT, () => { console.log("Server is running on port", PORT); });