/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
  userEmail: "",
  userPhoneNumber: "",
  userOTP: "",
  onboarding: null,
};

// auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails: (state, {payload: user}) => {
      state.user = user;
    },
    setOnboardingStatus: (state, {payload}) => {
      state.onboarding = payload;
    },
    setUserToken: (state, {payload: token}) => {
      state.token = token;
    },
    setUserEmail: (state, {payload: email}) => {
      state.userEmail = email;
    },
    setUserPhoneNumber: (state, {payload: phoneNumber}) => {
      state.userPhoneNumber = phoneNumber;
    },
    setUserOTP: (state, {payload: otp}) => {
      state.userOTP = otp;
    },
    logOut: (state, {payload: {redirect = true, type = "user"}}) => {
      state.token = "";
      state.user = null;
      state.userEmail = "";
      // check if the redirect payload is passed
      window.localStorage.clear();
      if (redirect) {
        let redirectTo = window.location.pathname;
        window.location.href = `/${type}/login?redirectTo=${redirectTo}`;
      }
    },
  },
});

const {actions, reducer} = authSlice;
export const {
  setUserDetails,
  logOut,
  setUserToken,
  setUserEmail,
  setUserOTP,
  setUserPhoneNumber,
  setOnboardingStatus,
} = actions;

// selector to select user details from the store
export const selectCurrentUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectEmail = state => state.auth.userEmail;
export const selectPhoneNumber = state => state.auth.userPhoneNumber;
export const selectOTP = state => state.auth.userOTP;
export const selectOnboarding = state => state.auth.onboarding;

export default reducer;
