// Set up your server
import express, {Request, Response}  from "express";
import dotenv, { config } from 'dotenv'
dotenv.config()
import producsRouter from "./routes/products.routes";

// Create server
const app = express()

// Middleware
app.use(express.json())// allows json data 

// Routes
app.use("/products",producsRouter)

// Fallback 
app.use((req: Request, res: Response)=>{
    res.status(404).json({message: 'Invalid Route'})
})

// Start the server
const PORT  = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT} `)
})