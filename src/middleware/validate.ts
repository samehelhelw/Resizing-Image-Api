import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { existsSync } from 'fs';

const validate = (req: Request, res: Response, next: NextFunction): void => {
  const { filename, width, height } = req.query;

  if (!filename) {
    res.send('fileName is not found');
    return;
  }
  if (!width) {
    res.send('width is not found');
    return;
  }
  if (!height) {
    res.send('height is not found');
    return;
  }

  const image = (filename as string) + '.jpg';

  const imagePath = path.join('Assets', 'images', image);

  if (!existsSync(imagePath)) {
    res.send('image is not exist');
    return;
  }
  const entered_width = Number(width);
  const entered_height = Number(height);
  if (!Number.isInteger(entered_width) || entered_width < 1) {
    res.send('width should be >= 1');
    return;
  }
  if (!Number.isInteger(entered_height) || entered_height < 1) {
    res.send('height should be >= 1');
    return;
  }
  next();
};

export default validate;
