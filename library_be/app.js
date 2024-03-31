const express = require("express");
const comicsRouter = require("./library_section/comics/routes.js");
const booksRouter = require("./library_section/books/routes.js");
const db = require("./db.js");


let app = express();

app.use(express.json());

app.set('db', db);

app.use('/comics', comicsRouter);

app.use('/books', booksRouter);

module.exports = app;