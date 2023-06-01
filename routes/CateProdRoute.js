import express from 'express';
import {getCateProd} from '../controllers/CateProdController.js';

const router = express.Router();

router.get('/cateprod/cc', getCateProd);

export default router;
