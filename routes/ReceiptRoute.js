import { addHoadon,deleteHoadon,getAllHoadon } from "../controllers/ReceiptController.js";
import express from 'express';

const router = express.Router();

router.post('/hoadon/:makh',addHoadon);
router.delete('/hoadon/:mahd',deleteHoadon);
router.get('/admin/hoadon',getAllHoadon)
export default router;
