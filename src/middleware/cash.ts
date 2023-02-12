import { existsSync } from 'fs';
import { Request, Response, NextFunction } from 'express';
import path from 'path';

const cash = (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, height } = req.query;
  const image_width = Number(width);
  const image_height = Number(height);
  const imageName =
    (filename as string) + `_${image_width}_${image_height}.jpg`;
  const __dirname = path.resolve();

  const cashPath = path.join('Assets', 'thumb', imageName);

  if (!existsSync(cashPath)) {
    next();
  } else {
    res.sendFile(__dirname + '/' + cashPath);
  }
};

export default cash;
