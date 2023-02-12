import express from 'express';
import { Request, Response } from 'express';
import router from './routes/Routes.js';

const app = express();
const port = 5000;

app.use('/api', router);

app.listen(port, () =>
  console.log(`app listening on port http://locahost:${port} !`)
);
app.use((req: Request, res: Response) => {
  res.status(404).send('Not found');
});

export default app;
