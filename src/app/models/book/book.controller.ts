import { NextFunction, Request, Response } from "express";
import {
  getBooksByGenreAndPublisherFromDB,
  getBooksByGenreFromDB,
  getBooksByGenreNameFromDB,
  getBooksFromDB,
  getFeaturedBooksFromDB,
  updateBooksPriceFromDB,
} from "./book.service";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBooksFromDB();

  res.status(200).json({
    status: "Successfully get books list",
    data: books,
  });
};

export const getBooksByGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBooksByGenreFromDB();

  res.status(200).json({
    status: "Successfully get books list by genre",
    data: books,
  });
};

// Task - 2
export const getGenreByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { genreName } = req.params;
  const books = await getBooksByGenreNameFromDB(genreName);

  res.status(200).json({
    status: "Successfully get books by genre name",
    data: books,
  });
};

// Task - 3
export const getBooksByGenreAndPublisher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBooksByGenreAndPublisherFromDB();

  res.status(200).json({
    status: "Successfully get books by genre and publishers name",
    data: books,
  });
};

// task - 4
export const getFeaturedBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getFeaturedBooksFromDB();

  res.status(200).json({
    status: "Successfully get featured books",
    data: user,
  });
};

// task - 5
export const updateBooksPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await updateBooksPriceFromDB();

  res.status(200).json({
    status: "Successfully updated book list",
    data: books,
  });
};

// Pattern
// Route -> Controller -> Service
