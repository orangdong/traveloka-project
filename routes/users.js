import express from 'express';
import { index, show, update, destroy, store } from '../handlers/users.js';

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
