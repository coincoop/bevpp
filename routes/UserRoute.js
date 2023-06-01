import express from 'express';
import { userRegister,userLogin,userRefresh,userLogout,getUserByMakh} from '../controllers/UserController.js';
import {verifyToken} from '../controllers/middlewareController.js';

const router = express.Router();

router.post('/account/register', userRegister);
router.post('/account/login', userLogin);
router.post('/account/refresh', userRefresh);
router.post('/account/logout',verifyToken, userLogout);
router.get('/account/:makh', getUserByMakh);

export default router