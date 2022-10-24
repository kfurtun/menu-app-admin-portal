import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Ingredient {
  _id: string;
  type: string;
  name: string;
}

interface AddedIngredientState {
  name?: string;
  ingredients: {
    [key: string]: Ingredient;
  };
}
// type AddedIngredientState= Record<string,Ingredient> & { name:string }

interface Payload {
  type: string;
  name: string;
}

const initialState: AddedIngredientState = { ingredients: {} };

export const addedItemSlice = createSlice({
  name: 'addedItem',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addIngredient: (state, action: PayloadAction<Payload>) => {
      state.ingredients[action.payload.type] = {
        ...state.ingredients[action.payload.type],
        [action.payload.name]: action.payload,
      };
    },
  },
});

export const { addIngredient, addName } = addedItemSlice.actions;
export const selectSections = (state: RootState) => state.addedItem;
export default addedItemSlice.reducer;
