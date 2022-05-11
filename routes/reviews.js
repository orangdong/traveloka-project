import express from 'express';
import { index, show, store } from '../handlers/reviews.js';

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.get('/:id', show);

export default router;
