"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
// create a new router instance
const producsRouter = (0, express_1.Router)();
// Get all products 
producsRouter.get("/", product_controller_1.default.getAllProducs);
// Add Product
producsRouter.post("/", product_controller_1.default.addProduct);
// Get product by id
producsRouter.get("/:id", product_controller_1.default.getProductById);
// Update product
producsRouter.put("/:id", product_controller_1.default.updateProduct);
// Delete product
producsRouter.delete("/:id", product_controller_1.default.deleteProduct);
exports.default = producsRouter;
