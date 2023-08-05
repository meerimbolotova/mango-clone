import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  userInfo: "",
  changeEmailError: "",
  changePasswordError: "",
};

export const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    clearInputs(state, action) {
      state.email = "";
      state.password = "";
    },
    clearErrors(state, action) {
      state.emailError = "";
      state.passwordError = "";
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setEmailError(state, action) {
      state.emailError = action.payload;
    },
    setPasswordError(state, action) {
      state.passwordError = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setChangeEmailError(state, action) {
      state.changeEmailError = action.payload;
    },
    setChangePasswordError(state, action) {
      state.changePasswordError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {
  clearErrors,
  clearInputs,
  setUser,
  setEmail,
  setPassword,
  setEmailError,
  setPasswordError,
  setUserInfo,
  setChangeEmailError,
  setChangePasswordError,
} = authSlice.actions;
