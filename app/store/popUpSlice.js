import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    activatePopUp: (state) => {
      state.value = true
    },
    deactivatePopUp: (state) => {
      state.value =false
    },
  },
})

export const { activatePopUp, deactivatePopUp } = popUpSlice.actions

export default popUpSlice.reducer