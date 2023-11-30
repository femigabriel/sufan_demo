import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_APP_API_URL;

import { logOut } from "../redux/slice/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, api) => {
    const { auth } = api.getState();

    if (auth.token) {
      headers.set("authorization", `Bearer ${auth.token}`);
      headers.set("Access-Control-Allow-Origin", `*`);
    }
    headers.set("Accept", `application/json`);
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  let err = result?.error;
  if (result?.error && err.data?._meta?.error?.message.includes("logged in")) {
    // logout
    console.log("Something went wrong, Please login again", "error");
    setTimeout(() => {
      api.dispatch(
        logOut({
          redirect: true,
        })
      );
    }, 1000);
  }
  return result;
};

export const paymentApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "paymentApi",
  tagTypes: ["stripe"],
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (body) => ({
        url: `transaction/payment-intent`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["stripe"],
    }),
    createPaymentCheckoutSession: builder.mutation({
      query: (body) => ({
        url: `transaction/checkout`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["stripe"],
    }),
    verifyPaymentIntent: builder.mutation({
      query: (body) => ({
        url: `/transaction/verify?uuid=${body?.uuid}&userId=${body?.userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useCreatePaymentCheckoutSessionMutation,
  useVerifyPaymentIntentMutation,
} = paymentApi;
