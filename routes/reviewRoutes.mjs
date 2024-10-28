import express from 'express';
import { getReviewsByBook, addReview, deleteReview } from '../controllers/reviewController.mjs';
const router = express.Router();

router.get('/book/:id', getReviewsByBook);
router.post('/', addReview);
router.delete('/:id', deleteReview);

export default router;