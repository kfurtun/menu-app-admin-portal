import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Ingredient {
  _id: string;
  type: string;
  name: string;
}

interface AddedIngredientState {
  name: string;
  price: string;
  ingredients: {
    [key: string]: Ingredient;
  };
}

// type AddedIngredientState = { ingredients: Record<string, Ingredient> } & {
//   name: string;
//   price: string;
// };

interface IngredientPayload {
  type: string;
  name: string;
}

interface NewItemPayload {
  propertyKey: string;
  value: string;
}

const initialState: AddedIngredientState = {
  name: '',
  price: '',
  ingredients: {},
};

export const addedItemSlice = createSlice({
  name: 'addedItem',
  initialState,
  reducers: {
    addDetails: (state, action: PayloadAction<NewItemPayload>) => {
      return { ...state, [action.payload.propertyKey]: action.payload.value };
    },
    addIngredient: (state, action: PayloadAction<IngredientPayload>) => {
      state.ingredients[action.payload.type] = {
        ...state.ingredients[action.payload.type],
        [action.payload.name]: action.payload,
      };
    },
  },
});

export const { addIngredient, addDetails } = addedItemSlice.actions;
export const selectSections = (state: RootState) => state.addedItem;
export default addedItemSlice.reducer;
