"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products.controller"));
// create a new router instance
const producsRouter = (0, express_1.Router)();
// Get all products 
producsRouter.get("/", products_controller_1.default.getAllProducs);
// Add Product
producsRouter.post("/", products_controller_1.default.addProduct);
// Get product by id
producsRouter.get("/:id", products_controller_1.default.getProductById);
// Update product
producsRouter.put("/:id", products_controller_1.default.updateProduct);
// Delete product
producsRouter.delete("/:id", products_controller_1.default.deleteProduct);
exports.default = producsRouter;
