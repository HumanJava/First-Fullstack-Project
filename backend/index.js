
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON req.bodies

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error(`❌ Error in Fetch products : ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }
});


app.post("/api/products", async (req, res) => {
    const product = req.body; // users will send data

    if (!product.name || !product.price || !product.image) {

        return res.status(400).json({ success: false, message: "Please fill out all values" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error(`❌ Error in Create product : ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }

});

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Product not found" });

    }
});


console.log(process.env.MONGO_URI);

app.listen(8000, () => {
    connectDB();
    console.log('Server is running on http://localhost:8000');
});

