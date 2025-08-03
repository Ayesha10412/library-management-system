import { useGetBooksQuery, useUpdateBookMutation } from "@/redux/api/baseApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import type { IBook } from "@/types/book";
import { Input } from "../ui/input";

export default function BookEdit() {
  const { id } = useParams();
  const { data } = useGetBooksQuery(undefined);
  const navigate = useNavigate();
  const book = data?.data?.find((book: IBook) => book._id === id);
  const [updateBook] = useUpdateBookMutation();
  const form = useForm({
    defaultValues: { title: "", author: "", genre: "", isbn: "", copies: 1 },
  });
  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        copies: book.copies,
      });
    }
  }, [book, form]);

  const onSubmit = async (values: any) => {
    try {
      await updateBook({ id, ...values }).unwrap();
      toast.success("Book Updated!!");
      navigate("/allBooks");
    } catch (error) {
      console.log(error);
      toast.error("Update failed!!");
    }
  };
  return (
    <div className="mt-20 mb-5">
      <h1 className="text-green-700 text-2xl text-center font-bold">
        Edit a Book
      </h1>
      <div className="w-[60%] mx-auto mt-8 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {(["title", "author", "genre", "isbn", "copies"] as const).map(
              (fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl capitalize">
                        {fieldName}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={fieldName === "copies" ? "number" : "text"}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )
            )}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
