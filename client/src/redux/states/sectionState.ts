import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Sections {
  [ingredients: string]: Boolean;
  menuItems: Boolean;
}

interface Payload {
  type: string;
}

const initialState: Sections = {
  ingredients: false,
  menuItems: false,
};

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    showSection: (state, action: PayloadAction<Payload>) => {
      state[action.payload.type] = !state[action.payload.type];
    },
  },
});

export const { showSection } = sectionsSlice.actions;
export const selectSections = (state: RootState) => state.sections;
export default sectionsSlice.reducer;
