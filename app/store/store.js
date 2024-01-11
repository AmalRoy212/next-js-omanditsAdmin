import { configureStore } from '@reduxjs/toolkit';
import popUpSlice from './popUpSlice'
import loadingSlice from './loadingSlice';
import selectionSlice from './selectionSlice';
import selectSlice from './selectSlice';

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
    loading : loadingSlice,
    selection : selectionSlice,
    select : selectSlice
  },
})