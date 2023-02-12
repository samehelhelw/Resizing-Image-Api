import sharp from 'sharp';

const resizeImage = async (
  ima_Path: string,
  width: number,
  height: number,
  newPath: string
): Promise<void> => {
  try {
    await sharp(ima_Path).resize(width, height).toFile(newPath);
  } catch (error) {
    throw new Error('there is a problem in resizeing the image');
  }
};
export default resizeImage;
