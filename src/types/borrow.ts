export interface IBorrowSummary {
  book: {
    _id: string;
    isbn: string;
    title: string;
  };
  totalQuantity: number;
  dueDate: Date;
}
