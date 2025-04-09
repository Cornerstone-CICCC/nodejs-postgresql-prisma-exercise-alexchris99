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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient(); // mew instance of prisma
// get all the products
const getAllProducs = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.product.findMany(); // get all the products
});
// add a product
const addProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.create({ data }); // add a product to the table
});
// get product by id
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.findUnique({
        where: { id }
    });
});
// update product
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const productFound = yield getProductById(id);
    if (!productFound) {
        return null;
    }
    const updatedProduct = {
        productName: (_a = data.productName) !== null && _a !== void 0 ? _a : productFound.productName,
        price: (_b = data.price) !== null && _b !== void 0 ? _b : productFound.price
    };
    return yield prisma.product.update({
        where: { id },
        data
    });
});
// Delete product 
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield getProductById(id);
    if (!productFound) {
        return null;
    }
    return prisma.product.delete({
        where: { id }
    });
});
exports.default = {
    getAllProducs,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
