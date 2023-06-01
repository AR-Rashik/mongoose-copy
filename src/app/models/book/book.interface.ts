import { HydratedDocument, Model } from "mongoose";

export interface IBook {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: {
    user: string;
    comment: string;
  }[];
  rating: number;
  price: string;
}

// Statics
// interface BooksStaticModel extends Model<IBook> {
//   getFeaturedBooks(): IBook[];
// }

// Custom instance method
export interface IBookMethods {}

export interface BooksModel extends Model<IBook, {}, IBookMethods> {
  getFeaturedBooks(): Promise<HydratedDocument<IBook, IBookMethods>>;
}
