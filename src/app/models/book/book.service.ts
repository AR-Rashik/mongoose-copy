import { IBook } from "./book.interface";
import { BookModel } from "./book.model";

export const getBooksFromDB = async (): Promise<IBook[]> => {
  const books = await BookModel.find();
  return books;
};

export const getBooksByGenreFromDB = async (): Promise<IBook[]> => {
  const books = await BookModel.find({ genre: "Fantasy" });
  return books;
};

// Task - 2
export const getBooksByGenreNameFromDB = async (
  payload: string
): Promise<IBook[]> => {
  const books = await BookModel.find({ genre: payload });
  return books;
};

// Task - 3
export const getBooksByGenreAndPublisherFromDB = async (): Promise<IBook[]> => {
  const books = await BookModel.find({
    genre: "Sci-Fi",
    "publisher.name": "Roli Books",
  });
  return books;
};

// Task - 4
export const getFeaturedBooksFromDB = async () => {
  const books = await BookModel.getFeaturedBooks();
  return books;
};

// Task - 5
export const updateBooksPriceFromDB = async () => {
  const books = await BookModel.updateMany({ publicationYear: { $gt: 2020 } }, [
    { $set: { price: { $toInt: "$price" } } },
  ]);
  return books;
};

// Pattern
// Route -> Controller -> Service
