import express, { Request, Response } from 'express';
import { collections } from '../database/services/database.service';
import Ingredients from '../database/models/ingredients';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const data = (await collections
      .ingredients!.find({})
      .toArray()) as Ingredients[];

    res.status(200).send(data);
  } catch (e) {
    res.status(500).send('Error var');
  }
});

export default router;
