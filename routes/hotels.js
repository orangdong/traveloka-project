import express from 'express';
import { index, show, update, destroy, store, indexReviews } from '../handlers/hotels.js';

const router = express.Router();

router.get('/', index);
router.get('/reviews', indexReviews);
router.get('/:id', show);

export default router;
