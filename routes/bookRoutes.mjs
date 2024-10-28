import express from 'express';
import { getAllBooks, createBook } from '../controllers/bookController.mjs';
const router = express.Router();

router.get('/', getAllBooks);
router.post('/', createBook);

export default router;