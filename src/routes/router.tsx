import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "@/components/BooksManagement/AllBooks";
import BookEdit from "@/components/BooksManagement/BookEdit";
import BookDelete from "@/components/BooksManagement/BookDelete";
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
        path: "editBook",
        element: <BookEdit></BookEdit>,
      },
      {
        path: "deleteBook",
        element: <BookDelete></BookDelete>,
      },
      {
        path: "borrowBook",
        element: <BookBorrow></BookBorrow>,
      },
    ],
  },
]);
