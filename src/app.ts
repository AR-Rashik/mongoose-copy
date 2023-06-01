import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
// import { Schema, model } from "mongoose";

const app: Application = express();

// Application routes
import booksRoutes from "./app/models/book/book.route";

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/books", booksRoutes);

export default app;
