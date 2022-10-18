import axios, { AxiosError } from 'axios';
import { proxy } from 'constants/constants';

interface NewItem {
  _id: string;
  type: string;
}

const postIngredients = async (
  ingredientObj: NewItem
): Promise<AxiosError | void> => {
  try {
    const response = await axios.post(
      `${proxy}/ingredients/new`,
      ingredientObj
    );
    console.log(response);
  } catch (err) {
    throw err;
  }
};

export default postIngredients;
