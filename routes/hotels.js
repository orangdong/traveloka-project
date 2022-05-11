import express from 'express';
import { index, show, update, destroy, store } from '../handlers/hotels.js';

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);
router.get('/reviews', index);
router.get('/:id/reviews', index);

export default router;
