import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ads: [],
}

const userSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAds(state, action) {
      state.ads = action.payload
    },
  },
})

export const { setAds } = userSlise.actions

export default userSlise.reducer
