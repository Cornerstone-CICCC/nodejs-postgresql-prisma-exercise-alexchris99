import { Response, Request } from "express";
import productModel from "../models/products.model";
import { Product } from "@prisma/client";

// get all products
const getAllProducs = async(req: Request, res: Response)=>{
    try{
        const products = await productModel.getAllProducs()
        if(products.length === 0){
            res.status(200).json({message: "No products added"})
            return
        }
        res.status(200).json(products)
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Server error"})
    }
}

// add a product
const addProduct = async(req: Request<{},{},Omit<Product,"id">>, res: Response)=>{
    try{
        const {productName, price} = req.body
        if(!productName || !price){
            res.status(500).json({message: "Missing information"})
            return
        }
        const newProduct = {
            productName,
            price
        }
        const product = await productModel.addProduct(newProduct)
        if(!product){
            res.status(500).json({message: "Server Error"})
            return
        }
        res.status(201).json(product)
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Unable to add Product"})
    }
}

// get product by id
const getProductById =  async(req: Request<{id: string}>, res: Response)=>{
    try{
        const id = Number(req.params.id)
        if(!id){
            res.status(500).json({message: "Missing id"})
            return
        }
        const product = await productModel.getProductById(id)
        if(!product){
            res.status(500).json({message: "Unable to find Product"})
            return 
        }
        res.status(200).json(product)
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Unable to find product"})
    }
}

// Update product
const updateProduct = async(req: Request<{id: string},{},Partial<Product>>, res: Response)=>{
    try{
        const id = Number(req.params.id)
        if(!id){
            res.status(500).json({message: "Id is missing"})
            return
        }
        const {productName, price} = req.body
        const updatedProduct = {
            productName,
            price
        }
        const product = await productModel.updateProduct(id,updatedProduct)
        if(!product){
            res.status(500).json({message: "Unable to edit product"})
            return
        }
        res.status(201).json(product)
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Unable to edit product"})
    }
}

// Delete product
const deleteProduct = async(req: Request<{id: string}>, res: Response)=>{
    try{
        const id = Number(req.params.id)
        if(!id){
            res.status(500).json({message: "Id missing"})
            return
        }
        const product = await productModel.deleteProduct(id)
        if(!product){
            res.status(500).json({message: "Unable to delete product"})
            return
        }
        res.status(200).json(product)
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Unable to delete Product"})
    }
}

export default{
    getAllProducs,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct
}