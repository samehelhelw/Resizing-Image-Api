import { Router } from 'express';

import validate from '../middleware/validate.js';
import cash from '../middleware/cash.js';
import resize from '../middleware/resize.js';

const images = Router();

images.get('/images', validate, cash, resize);

export default images;
