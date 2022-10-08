import { ObjectId, WithId } from 'mongodb';

export default interface Ingredients extends WithId<Document> {
  name: string;
  type: string;
  id?: ObjectId;
}
