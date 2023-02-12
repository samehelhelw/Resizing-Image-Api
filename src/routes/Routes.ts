import { Router } from 'express';
import images from '../api/images.js';

const router = Router();

router.use('/', images);

export default router;
