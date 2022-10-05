import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IngredientsState } from 'models';

interface Payload {
  itemType: string;
  item: string;
}

const initialState: IngredientsState = {
  pastas: [],
  sauces: [],
  meats: [],
  veggies: [],
  garnishes: [],
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<Payload>) => {
      if (state[action.payload.itemType].length < 1) {
        state[action.payload.itemType].push(action.payload.item);
      } else {
        if (!state[action.payload.itemType].includes(action.payload.item)) {
          state[action.payload.itemType].push(action.payload.item);
        }
      }
    },
  },
});

export const { addIngredient } = ingredientsSlice.actions;
export const selectIngredients = (state: RootState) => state.ingredients;
export default ingredientsSlice.reducer;
