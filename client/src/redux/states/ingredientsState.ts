import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ItemObj {
  _id: string;
  type: string;
}
type InitialStateType = ItemObj[];

const initialState: InitialStateType = [];

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    showIngredients: (state, action: PayloadAction<InitialStateType>) => {
      return (state = action.payload);
    },
  },
});

export const { showIngredients } = ingredientsSlice.actions;
export const selectIngredients = (state: RootState) => state.ingredients;
export default ingredientsSlice.reducer;
