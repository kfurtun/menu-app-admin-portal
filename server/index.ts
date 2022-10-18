import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/services/database.service';

import ingredients from './routes/ingredients';

dotenv.config();

const app: Express = express();
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req: Request, res: Response, next) {
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

connectDb()
  .then(() => {
    app.use('/ingredients', ingredients);

    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((e: Error) => {
    console.log('Database connection failed', e);
    process.exit();
  });
