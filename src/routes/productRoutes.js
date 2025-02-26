
import express from 'express';
import { getallProducts } from '../controllers/productController.js'


const router = express.Router();

router.get('/',getallProducts);
export default router;