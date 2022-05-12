import express from 'express';
import { index, show } from '../handlers/reviews.js';

const router = express.Router();

router.get('/', index);
router.get('/:id', show);
// router.post('/', store);
// router.delete('/:id', destroy);

export default router;
