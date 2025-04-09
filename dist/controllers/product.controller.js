"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = __importDefault(require("../models/products.model"));
// get all products
const getAllProducs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_model_1.default.getAllProducs();
        if (products.length === 0) {
            res.status(200).json({ message: "No products added" });
            return;
        }
        res.status(200).json(products);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});
// add a product
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, price } = req.body;
        if (!productName || !price) {
            res.status(500).json({ message: "Missing information" });
            return;
        }
        const newProduct = {
            productName,
            price
        };
        const product = yield products_model_1.default.addProduct(newProduct);
        if (!product) {
            res.status(500).json({ message: "Server Error" });
            return;
        }
        res.status(201).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to add Product" });
    }
});
// get product by id
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        if (!id) {
            res.status(500).json({ message: "Missing id" });
            return;
        }
        const product = yield products_model_1.default.getProductById(id);
        if (!product) {
            res.status(500).json({ message: "Unable to find Product" });
            return;
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to find product" });
    }
});
// Update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        if (!id) {
            res.status(500).json({ message: "Id is missing" });
            return;
        }
        const { productName, price } = req.body;
        const updatedProduct = {
            productName,
            price
        };
        const product = yield products_model_1.default.updateProduct(id, updatedProduct);
        if (!product) {
            res.status(500).json({ message: "Unable to edit product" });
            return;
        }
        res.status(201).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to edit product" });
    }
});
// Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        if (!id) {
            res.status(500).json({ message: "Id missing" });
            return;
        }
        const product = yield products_model_1.default.deleteProduct(id);
        if (!product) {
            res.status(500).json({ message: "Unable to delete product" });
            return;
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to delete Product" });
    }
});
exports.default = {
    getAllProducs,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
