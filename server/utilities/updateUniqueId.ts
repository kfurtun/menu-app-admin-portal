import * as mongoDB from 'mongodb';

export const updateUniqueId = (
  collection: mongoDB.Collection,
  updateAmount: number
) => {
  return collection?.findOneAndUpdate(
    { _id: 'UNIQUE COUNT DOCUMENT IDENTIFIER' },
    { $inc: { COUNT: updateAmount } }
  );
};
