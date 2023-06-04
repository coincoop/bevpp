import express from "express";
import multer from "multer";
import path from "path";

import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/AdProductController.js";
const router = express.Router();

router.post("/admin/adproducts",createProduct);
router.get('/admin/adproducts', getProducts);
router.get('/admin/adproducts/:id', getProductById);
router.patch('/admin/adproducts/:id', updateProduct);
router.delete('/admin/adproducts/:id', deleteProduct);

export default router
