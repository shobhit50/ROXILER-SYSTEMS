import express from 'express';
import * as transactionController from '../controllers/transactionController.js';


const router = express.Router();

router.get('/products', transactionController.getProducts);
router.get('/salesMonth', transactionController.getSalesMonth);
router.get('/barChart', transactionController.getBarChart);
router.get('/pieChart', transactionController.getPieChart);

export default router;