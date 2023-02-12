import { Response, Request } from 'express';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';
import resizeImage from '../util/resizeImage.js';

const resize = async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height } = req.query;

  const image_width = Number(width);
  const Image_height = Number(height);
  const image = (filename as string) + '.jpg';
  const newImage = (filename as string) + `_${image_width}_${Image_height}.jpg`;
  const imagePath = path.join('Assets', 'images', image);
  const __dirname = path.resolve();

  const cash_path = path.join('Assets', 'thumb');
  if (!existsSync(cash_path)) {
    mkdirSync(cash_path);
  }

  const newImagePath = path.join(cash_path, newImage);
  try {
    await resizeImage(imagePath, image_width, Image_height, newImagePath);
  } catch (error) {
    res.send('failed to make the image');
    return;
  }
  res.sendFile(__dirname + '/' + newImagePath);
};

export default resize;
