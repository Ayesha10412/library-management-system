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
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link, useParams } from "react-router";

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
  const { id } = useParams();
  //console.log(id);
  //console.log(response);
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
        Swal.fire("Error!", "Failed to delete book.", "error");
        //console.log(error);
      }
    }
  };

  return (
    <div className="w-[80%] mx-auto mt-28">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
        All Books
      </h1>
      <div>
        <Table>
          <TableCaption>A Table of Book List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
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
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>{book.available ? "true" : "Unavailable"}</TableCell>
                <TableCell className="text-right flex flex-row gap-0.5 text-xl">
                  <Link to={`/editBook/${book._id}`}>
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
