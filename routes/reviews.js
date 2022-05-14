import express from 'express';
import { index, show, destroy, update, store } from '../handlers/reviews.js';

const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.delete('/:id', destroy);
router.put('/:id', update);

export default router;
