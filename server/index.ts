import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import indexRouter from './routes/index';

dotenv.config();

const app: Express = express();
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
