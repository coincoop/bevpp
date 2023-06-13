import express from 'express';
import { addCtHoaDon } from '../controllers/CTHDController.js';

const router = express.Router();
router.post('/cthoadon/:mahd', addCtHoaDon);

export default router