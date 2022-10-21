import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Ingredient {
  _id: string;
  type: string;
  name: string;
}

interface AddedIngredientState {
  [key: string]: Ingredient | string;
}

interface Payload {
  type: string;
  name: string;
}

const initialState: AddedIngredientState = {};

export const addedItemSlice = createSlice({
  name: 'addedItem',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addIngredient: (state, action: PayloadAction<Payload>) => {
      state[action.payload.type] = {
        ...(state[action.payload.type] as Ingredient),
        [action.payload.name]: action.payload,
      };
    },
  },
});

export const { addIngredient, addName } = addedItemSlice.actions;
export const selectSections = (state: RootState) => state.addedItem;
export default addedItemSlice.reducer;
