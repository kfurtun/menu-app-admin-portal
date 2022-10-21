import { configureStore } from '@reduxjs/toolkit';
import {
  ingredientsReducer,
  sectionsReducer,
  addedItemReducer,
} from './states';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    sections: sectionsReducer,
    addedItem: addedItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
