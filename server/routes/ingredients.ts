import express, { Request, Response } from 'express';
import { collections } from '../database/services/database.service';
import Ingredients from '../database/models/ingredients';
const router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const data = (await collections
      .ingredients!.find({})
      .toArray()) as Ingredients[];

    res.status(200).send(data);
  } catch (e) {
    res.status(500).send('Error var');
  }
});

router.post('/new', async (req: Request, res: Response) => {
  try {
    const newIngredients = req.body as Ingredients;
    console.log(newIngredients);
    const result = await collections.ingredients!.insertMany([newIngredients]);

    result
      ? res.status(201).send(`Successfully added a new ingredient: ${result}`)
      : res.status(400).send('Failed to create a new ingredient.');
  } catch (e) {
    console.error(e);
    // res.status(500).send(e.message);
  }
});

export default router;
