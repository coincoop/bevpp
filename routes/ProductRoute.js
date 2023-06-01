import express from 'express';
import {getProduct, getProductUrl, getProductsByUrl,getProductById, getProductSale} from '../controllers/ProductController.js';


const router = express.Router();

// Định nghĩa các router API cho menu
router.get('/product', getProduct);
router.get('/:url', getProductUrl);
router.get('/categories/:url', getProductsByUrl);
router.get('/product/:id', getProductById);
router.get('/products/productsale', getProductSale);
export default router;
