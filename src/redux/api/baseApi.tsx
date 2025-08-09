import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://library-management-system-server-vert.vercel.app/routes/api",
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (book) => ({
        url: `/books/${book}`,
        providesTags: ["books"],
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),
    getBorrowBooks: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    borrowBook: builder.mutation({
      query: (borrow) => ({
        url: "/borrow",
        method: "POST",
        body: borrow,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateBookMutation,
  useGetBorrowBooksQuery,
  useBorrowBookMutation,
  useGetSingleBookQuery,
} = baseApi;
