import { WithId } from 'mongodb';

export default interface Ingredients extends WithId<Document> {
  type: string;
  id: string;
}
