import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

export default function BookBorrow() {
  const { bookId } = useParams();
  const form = useForm({ defaultValues: { quantity: 1, dueDate: "" } });
  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const borrowData = {
        ...formData,
        book: bookId,
        dueDate: new Date(formData.dueDate).toISOString(),
      };
      //console.log(borrowData);
      const res = await borrowBook(borrowData).unwrap();
      //console.log(res);
      form.reset();
      toast.success("Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || error?.message || "Book borrowed failed!!";
      toast.error(errorMessage);
    }
  };
  return (
    <div>
      <h1 className="text-2xl text-center text-rose-500 font-bold mt-4 mb-7">
        Borrow a Book
      </h1>

      <div className="w-[60%] mx-auto mt-8 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl capitalize">Quantity</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min={1} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl capitalize">Due Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
