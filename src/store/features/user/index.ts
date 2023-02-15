import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER: Record<string, any> = {
  userDetails: {},
  token: null,
  isLoggedIn: false,
  isFirstLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_USER,
  reducers: {
    loginUser: (state, action) => {
      console.log("login user called", action, state);
      return {
        ...state,
        userDetails: action.payload.userDetails,
        token: action.payload.token,
        isLoggedIn: true,
        isFirstLogin: !!action.payload.isFirstLogin
      };
    },
    logoutUser: (state) => {
      return { ...state, ...INITIAL_USER };
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
