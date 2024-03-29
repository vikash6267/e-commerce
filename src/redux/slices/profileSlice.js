import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,


}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
    setToken(state, value) {
      state.token = value.payload
    },
  },
})

export const { setUser, setLoading,setToken } = profileSlice.actions

export default profileSlice.reducer
