import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/baseApi";
import Swal from "sweetalert2";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import type { IBook } from "@/types/book";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router";

export default function AllBooks() {
  const {
    data: response,
    isLoading,
    isError,
  } = useGetBooksQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const [deleteBook] = useDeleteBookMutation();
  if (isLoading) {
    return <p>Loading......</p>;
  }
  if (isError) {
    return <p>Error Fetching Books!!!</p>;
  }
  //delete a book
  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } catch (error) {
        const err = error as Error;
        Swal.fire(`Error!", "Failed to delete book. ${err.message}`, "error");
      }
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-17">
      <h1 className="text-3xl  font-bold text-blue-700 text-center mb-12">
        All Books
      </h1>
      <div>
        <Table>
          <TableCaption>A Table of Book List</TableCaption>
          <TableHeader>
            <TableRow className="text-black font-bold text-lg">
              <TableHead className="w-[100px] ">Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response?.data?.map((book: IBook) => (
              <TableRow key={book._id}>
                <TableCell className="font-medium text-gray-500">
                  {book.title}
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell
                  className={
                    book?.available ? "text-green-600" : "text-red-500"
                  }
                >
                  {book.available ? "true" : "Unavailable"}
                </TableCell>
                <TableCell className="text-right flex flex-row gap-1 text-2xl">
                  <Link to={`/books/${book._id}`}>
                    <FaEye className="text-indigo-600 mr-1" />
                  </Link>
                  <Link to={`/edit-book/${book._id}`}>
                    {" "}
                    <FaEdit className="text-green-500" />
                  </Link>{" "}
                  <MdDelete
                    onClick={() => handleDelete(book._id)}
                    className="text-red-500"
                  />
                  <Link to={`/borrow/${book._id}`}>
                    {" "}
                    <FiArrowRightCircle className="text-blue-600" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
