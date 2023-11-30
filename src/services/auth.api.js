import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const API_URL =
  import.meta.env.VITE_APP_API_URL

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, {
    getState
  }) => {
    headers.set("Accept", `application/json`);
    const token = getState().auth.token;
    if (token) headers.append("authorization", `Bearer ${token}`);
    return headers;
  },
});

export const authApi = createApi({
  baseQuery,
  reducerPath: "authApi",
  tagTypes: ["user"],
  endpoints: builder => ({
    adminLogin: builder.mutation({
      query: body => ({
        url: `/admin/login`,
        method: "POST",
        body,
      }),
    }),

    // USERS
    userLogin: builder.mutation({
      query: body => ({
        url: `/user/login`,
        method: "POST",
        body,
      }),
    }),

    userSignUpWithEmail: builder.mutation({
      query: body => ({
        url: `/user`,
        method: "POST",
        body,
      }),
    }),

    userVerifyOtp: builder.mutation({
      query: body => ({
        url: `auth/verify`,
        method: "POST",
        body,
      }),
    }),

    userResendOtp: builder.mutation({
      query: body => ({
        url: `/user/auth/resend-otp`,
        method: "POST",
        body,
      }),
    }),

    // forgot password
    userSendPwdOtp: builder.mutation({
      query: body => ({
        url: `user/auth/send-password-reset-otp`,
        method: "POST",
        body,
      }),
    }),

    userPwdVerifyOtp: builder.mutation({
      query: body => ({
        url: `user/auth/verify-password-reset-otp`,
        method: "POST",
        body,
      }),
    }),

    userResetPwd: builder.mutation({
      query: body => ({
        url: `user/auth/reset-password`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  // ADMIN
  useAdminLoginMutation,

  // USERS
  useUserLoginMutation,
  useUserSignUpWithEmailMutation,
  useUserVerifyOtpMutation,
  useUserResendOtpMutation,
  useUserSendPwdOtpMutation,
  useUserPwdVerifyOtpMutation,
  useUserResetPwdMutation,

} = authApi;

