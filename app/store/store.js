import { configureStore } from '@reduxjs/toolkit';
import popUpSlice from './popUpSlice'
import loadingSlice from './loadingSlice';
import selectionSlice from './selectionSlice';

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
    loading : loadingSlice,
    selection : selectionSlice
  },
})