import { useDeleteBookMutation } from "@/redux/api/baseApi";
import Swal from "sweetalert2";

export default function BookDelete({ id }: { id: string }) {
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = async () => {
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
        console.log(error);
      }
    }
  };
  return <div></div>;
}
