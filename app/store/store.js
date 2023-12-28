import { configureStore } from '@reduxjs/toolkit';
import popUpSlice from './popUpSlice'

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
  },
})