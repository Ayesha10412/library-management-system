import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "@/components/BooksManagement/AllBooks";
import BookEdit from "@/components/BooksManagement/BookEdit";
import BookBorrow from "@/components/BooksManagement/BookBorrow";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "allBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/editBook/:id",
        element: <BookEdit></BookEdit>,
      },

      {
        path: "borrowBook",
        element: <BookBorrow></BookBorrow>,
      },
    ],
  },
]);
