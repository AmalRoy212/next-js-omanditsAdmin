import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loaderSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoader: (state) => {
      state.value = true
    },
    removeLoader: (state) => {
      state.value =false
    },
  },
})

export const { setLoader, removeLoader } = loaderSlice.actions

export default loaderSlice.reducer