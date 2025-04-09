import { Router } from "express";
import productController from "../controllers/products.controller";

// create a new router instance
const producsRouter = Router()

// Get all products 
producsRouter.get("/",productController.getAllProducs)

// Add Product
producsRouter.post("/",productController.addProduct)

// Get product by id
producsRouter.get("/:id",productController.getProductById)

// Update product
producsRouter.put("/:id",productController.updateProduct)

// Delete product
producsRouter.delete("/:id",productController.deleteProduct)

export default producsRouter