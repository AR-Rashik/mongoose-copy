import mongoose, { Model, Schema } from "mongoose";
import { BooksModel, IBook, IBookMethods } from "./book.interface";

const bookSchema = new Schema<IBook, BooksModel, IBookMethods>({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  price: { type: String, required: true },
});

// Create static method // task - 4
bookSchema.static("getFeaturedBooks", async function getFeaturedBooks() {
  const featuredBooks: any = await this.updateMany({ rating: { $gte: 4 } }, [
    {
      $set: {
        featured: {
          $cond: {
            if: { $gte: ["$rating", 4.5] },
            then: "BestSeller",
            else: "Popular",
          },
        },
      },
    },
  ]);

  return featuredBooks;
});

export const BookModel = mongoose.model<IBook, BooksModel>("Book", bookSchema);
