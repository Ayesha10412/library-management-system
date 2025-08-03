import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/routes/api",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});
export const { useGetBooksQuery, useUpdateBookMutation } = baseApi;
