import { PrismaClient, Product } from "@prisma/client";
import { NumericLiteral } from "typescript";

const prisma = new PrismaClient() // mew instance of prisma

// get all the products
const getAllProducs =  async ()=>{
    return prisma.product.findMany() // get all the products
}

// add a product
const addProduct = async(data: Omit<Product, "id">)=>{
    return await prisma.product.create({data}) // add a product to the table
}

// get product by id
const getProductById =  async(id: number)=>{
    return await prisma.product.findUnique({
        where: {id}
    })
}

// update product
const updateProduct = async(id: number, data: Partial<Product>)=>{
    const productFound = await getProductById(id)
    if(!productFound){
        return null
    }
    const updatedProduct: Omit<Product, 'id'> = {
        productName: data.productName ?? productFound.productName,
        price: data.price ?? productFound.price
    }
    return await prisma.product.update({
        where: {id},
        data
    })
}

// Delete product 
const deleteProduct =  async (id: number)=>{
    const productFound = await getProductById(id)
    if(!productFound){
        return null
    }
    return prisma.product.delete({
        where: {id}
    })
}

export default {
    getAllProducs,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct
}