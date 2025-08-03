import { useGetBooksQuery } from "@/redux/api/baseApi";
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
  console.log(response);
  if (isLoading) {
    return <p>Loading......</p>;
  }
  if (isError) {
    return <p>Error Fetching Books!!!</p>;
  }
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
                <TableCell>{book.available ? "true" : "false"}</TableCell>
                <TableCell className="text-right flex flex-row gap-0.5 text-xl">
                  <Link to="/editBook">
                    {" "}
                    <FaEdit className="text-green-500" />
                  </Link>
                  <Link to="/deleteBook">
                    {" "}
                    <MdDelete className="text-red-500" />
                  </Link>
                  <Link to="/borrowBook">
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
