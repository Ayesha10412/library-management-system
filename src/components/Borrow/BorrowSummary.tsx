import { useGetBorrowBooksQuery } from "@/redux/api/baseApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import type { IBorrowSummary } from "@/types/borrow";

export default function BorrowSummary() {
  const {
    data: response,
    isLoading,
    isError,
    isFetching,
  } = useGetBorrowBooksQuery(undefined, {
    // pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  console.log({ response });
  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (isError) {
    return <p>Error! fetching borrow summary.</p>;
  }
  return (
    <div>
      <h1 className="text-2xl mt-5 text-center text-blue-600 font-bold">
        Borrow Summary
      </h1>
      {isFetching && (
        <p className="text-lg text-gray-600 text-center font-semibold">
          Refreshing.....
        </p>
      )}
      <div className="w-[60%] mx-auto mt-10">
        <Table>
          <TableCaption>A Table of Borrow Summary List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Total Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response?.data?.map((book: IBorrowSummary, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{book.book.title}</TableCell>
                <TableCell className=" text-gray-500">
                  {book?.book?.isbn}
                </TableCell>
                <TableCell>{book?.totalQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
