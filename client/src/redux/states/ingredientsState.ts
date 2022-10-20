import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IngredientItem {
  _id: string;
  type: string;
  name: string;
}

type IngredientsState = { [key: string]: IngredientItem };

const initialState: IngredientsState = {};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    showIngredients: (state, action: PayloadAction<IngredientItem[]>) => {
      const tempState: IngredientsState = {};
      action.payload.forEach((ingredient) => {
        tempState[ingredient.type] = {
          ...tempState[ingredient.type],
          [ingredient.name]: ingredient,
        };
      });
      return (state = tempState);
    },
  },
});

export const { showIngredients } = ingredientsSlice.actions;
export const selectIngredients = (state: RootState) => state.ingredients;
export default ingredientsSlice.reducer;
