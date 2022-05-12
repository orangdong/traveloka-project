import express from 'express';
import { index, show, update, destroy, store,indexReviews,showReviews } from '../handlers/users.js';

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.get('/reviews', indexReviews);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);
router.get('/:id/reviews', showReviews);

export default router;
