import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "@/components/BooksManagement/AllBooks";
import BookEdit from "@/components/BooksManagement/BookEdit";
import BookBorrow from "@/components/BooksManagement/BookBorrow";
import AddBook from "@/components/BooksManagement/AddBook";
import BorrowSummary from "@/components/Borrow/BorrowSummary";
import Main from "@/layouts/Main";
import ViewDetails from "@/components/BooksManagement/ViewDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/edit-book/:id",
        element: <BookEdit></BookEdit>,
      },
      {
        path: "create-book",
        element: <AddBook></AddBook>,
      },
      {
        path: "/borrow/:bookId",
        element: <BookBorrow></BookBorrow>,
      },
      {
        path: "/books/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary></BorrowSummary>,
      },
    ],
  },
]);
