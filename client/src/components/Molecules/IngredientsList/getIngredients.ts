import axios from 'axios';
import { proxy } from 'constants/constants';
import { IngredientsState } from 'models';

const getIngredients = async (): Promise<IngredientsState> => {
  try {
    const { data } = await axios.get<IngredientsState>(
      `${proxy}/ingredients/all`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export default getIngredients;
