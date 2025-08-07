import { useCreateBookMutation } from "@/redux/api/baseApi";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddBook() {
  const form = useForm();
  const [open, setOpen] = useState(false);
  const [createBook, { data, isLoading, isError }] = useCreateBookMutation();
  console.log({ data });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data,
      isCompleted: false,
    };
    const result = await createBook(bookData).unwrap();
    setOpen(false);
    form.reset();
    toast.success("Book added successfully!");
    console.log("inside data:", result);
    console.log(isError);
  };
  return (
    <div className="flex justify-center items-center mt-8">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="font-semibold text-gray-600 text-sm"
            variant="outline"
          >
            Add New Book
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-blue-700 text-2xl font-semibold">
              Add a Book
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-0.5">Title</FormLabel>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-1">Author</FormLabel>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select genre." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FICTION">Fiction</SelectItem>
                        <SelectItem value="NON_FICTION">Non_fiction</SelectItem>
                        <SelectItem value="SCIENCE">Science</SelectItem>
                        <SelectItem value="HISTORY">History</SelectItem>
                        <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                        <SelectItem value="FANTASY">Fantasy</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-1">ISBN</FormLabel>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-1">Description</FormLabel>
                    <FormLabel />
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-1">Copies</FormLabel>
                    <FormLabel />
                    <FormControl>
                      <Input type="number" {...field} min={1} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="available"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-1">Available</FormLabel>
                    <FormLabel />
                    <FormControl>
                      <Select
                        onValueChange={(val) => field.onChange(val === "true")}
                        defaultValue={String(field.value)}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Is this available?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="true">Yes</SelectItem>
                          <SelectItem value="false">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" disabled={isLoading}>
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
