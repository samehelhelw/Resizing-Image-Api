import { existsSync } from 'fs';
import path from 'path';
import resizeImage from '../util/resizeImage.js';

describe('test resize image function ', () => {
  const imageName = 'porta.jpg';
  const width = 100;
  const height = 100;
  const imagePath = path.join('Assets', 'images', imageName);
  const cashName = `porta_${width}_${height}.jpg`;
  const cashPath = path.join('Assets', 'thumb', cashName);

  it('test resized Image is cashed', async () => {
    await resizeImage(imagePath, width, height, cashPath);
    expect(existsSync(cashPath)).toBeTrue();
  });
  it('test invalid image path', async () => {
    await expectAsync(
      resizeImage('', width, height, cashPath)
    ).toBeRejectedWithError();
  });
  it('test invalid width', async () => {
    await expectAsync(
      resizeImage(imagePath, 0, height, cashPath)
    ).toBeRejectedWithError();
  });
  it('test invalid height', async () => {
    await expectAsync(
      resizeImage(imagePath, width, 0, cashPath)
    ).toBeRejectedWithError();
  });
  it('test invallid cashpath', async () => {
    await expectAsync(
      resizeImage(imagePath, width, height, '')
    ).toBeRejectedWithError();
  });
});
