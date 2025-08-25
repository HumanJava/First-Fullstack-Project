
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.js';

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON req.bodies

app.use("/api/products", productRoutes)

console.log(process.env.MONGO_URI);

app.listen(8000, () => {
    connectDB();
    console.log('Server is running on http://localhost:8000');
});

