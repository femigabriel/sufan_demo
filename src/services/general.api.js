import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const API_URL =
    import.meta.env.VITE_APP_API_URL

import {
    logOut
} from "../redux/slice/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, api) => {
        const {
            auth
        } = api.getState();

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
            api.dispatch(logOut({
                redirect: true
            }));
        }, 1000);
    }
    return result;
};

export const generalApi = createApi({
    baseQuery: baseQueryWithReauth,
    reducerPath: "generalApi",
    tagTypes: [
        "orders",
        "chats",
        "profile",
    ],
    endpoints: builder => ({
        getOrders: builder.query({
            query: () => ({
                url: `/order`,
            }),
            providesTags: ["order"],
        }),


        // CHATS
        sendChats: builder.mutation({
            query: (body) => ({
                url: `/chats`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["chats"],
        }),

        getConversation: builder.query({
            query: (params) => ({
                url: `/conversation`,
                params,
            }),
            providesTags: ["chats"],
        }),

        getChats: builder.query({
            query: (params) => ({
                url: `/chats`,
                params,
            }),
            providesTags: ["chats"],
        }),

        getUsers: builder.query({
            query: (params) => ({
                url: `/user`,
                params,
            }),
            providesTags: ["chats"],
        }),

        getAdminProfile: builder.query({
            query: () => ({
                url: `admin/profile`,
            }),
            // providesTags: ["profile"],
        }),
    }),
});

export const {
    useGetOrdersQuery,

    // CHATS
    useSendChatsMutation,
    useGetConversationQuery,
    useGetChatsQuery,
    useGetUsersQuery,

    useGetAdminProfileQuery,
} = generalApi;