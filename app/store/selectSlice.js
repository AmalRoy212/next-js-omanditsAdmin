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
      console.log(state.value, "from setactiveFalse");
    },
    setActiveTrue: ( state ) => {
      state.value = true;
      console.log(state.value, "from setactiveTrue");
    },
  },
})

export const { setActiveFalse, setActiveTrue } = selectSlice.actions

export default selectSlice.reducer