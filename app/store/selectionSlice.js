import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    setDeselection: ( state, payload ) => {
      state.value.push(payload);
    },
    removeDeselection: ( state, payload ) => {
      state.value.filter((obj) => obj._id === payload._id)
    },
  },
})

export const { setDeselection, removeDeselection } = selectionSlice.actions

export default selectionSlice.reducer