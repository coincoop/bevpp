import { addHoadon,deleteHoadon } from "../controllers/ReceiptController.js";
import express from 'express';

const router = express.Router();

router.post('/hoadon/:makh',addHoadon);
router.delete('/hoadon/:mahd',deleteHoadon);
export default router;
