import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setActiveFalse: ( state ) => {
      state.value = false;
    },
    setActiveTrue: ( state ) => {
      state.value = true;
    },
  },
})

export const { setActiveFalse, setActiveTrue } = selectSlice.actions

export default selectSlice.reducer