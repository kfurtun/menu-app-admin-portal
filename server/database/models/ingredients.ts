import { WithId, ObjectId } from 'mongodb';

export default interface Ingredients extends WithId<Document> {
  type: string;
  _id: ObjectId;
  name: string;
}
