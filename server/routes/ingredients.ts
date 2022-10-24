import express, { Request, Response } from 'express';
import { collections } from '../database/services/database.service';
import Ingredients from '../database/models/ingredients';
import { updateUniqueId } from '../utilities/updateUniqueId';

const router = express.Router();

interface MessageResponseBody {
  message: string;
}

router.get(
  '/all',
  async (_req: Request, res: Response<Ingredients[] | MessageResponseBody>) => {
    try {
      const data = await collections
        .ingredients!.find<Ingredients>({})
        .toArray();

      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: 'Error var' });
    }
  }
);

router.post(
  '/new',
  async (
    req: Request<{}, {}, Ingredients>,
    res: Response<MessageResponseBody | Ingredients>
  ) => {
    try {
      const newIngredient = req.body;
      const isFound = await collections.ingredients?.findOne<Ingredients>({
        name: newIngredient.name,
      });

      if (!isFound && collections.uniqueIdentifierCounter) {
        const idResult = await updateUniqueId(
          collections.uniqueIdentifierCounter,
          1
        );

        const id = idResult?.value?.COUNT;
        if (idResult?.ok === 1) {
          const result = await collections.ingredients?.insertOne({
            ...newIngredient,
            _id: id,
          });

          result
            ? res.status(201).json(newIngredient)
            : res.status(400).json({
                message: 'Failed to create a new ingredient.',
              });
        }
      } else {
        res.status(400).json({ message: 'Failed to create a new ingredient.' });
      }
    } catch (e) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

router.delete(
  '/1',
  async (
    req: Request<{}, {}, { name: string }>,
    res: Response<MessageResponseBody>
  ) => {
    try {
      const result = await collections.ingredients!.deleteOne({
        name: req.body.name,
      });
      if (result && collections.uniqueIdentifierCounter) {
        const idResult = await updateUniqueId(
          collections.uniqueIdentifierCounter,
          -1
        );

        if (idResult?.ok === 1) res.status(200).json({ message: 'Success' });
      } else res.status(400).json({ message: 'No success' });
    } catch (e) {
      res.status(500).json({ message: 'Error var' });
    }
  }
);

export default router;
