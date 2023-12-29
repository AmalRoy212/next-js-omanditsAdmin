import { configureStore } from '@reduxjs/toolkit';
import popUpSlice from './popUpSlice'
import loadingSlice from './loadingSlice';

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
    loading : loadingSlice
  },
})