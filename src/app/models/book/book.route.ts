import express from "express";
import {
  getBooks,
  getBooksByGenre,
  getBooksByGenreAndPublisher,
  getFeaturedBooks,
  getGenreByName,
  updateBooksPrice,
} from "./book.controller";
const router = express.Router();

router.get("/", getBooks);
router.get("/genre/publication", getBooksByGenreAndPublisher); // task - 3
router.get("/featured-books", getFeaturedBooks); // task - 4
router.get("/genre", getBooksByGenre);
router.get("/update-price", updateBooksPrice); // task - 5
router.get("/genre/:genreName", getGenreByName); // task - 2

export default router;

// Pattern
// Route -> Controller -> Service
