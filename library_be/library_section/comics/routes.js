const express = require('express');
const { ISBNLookup, getComicByIssue } = require('./helpers/metronlookup');
const { uploadComic, getComicBooks, getComicBooksByStoryArc, getComicBookById, getComicBooksByCharacter, getComicBooksByIssue, getComicBooksBySeries } = require('./helpers/functions');
const comicsRouter = express.Router();


comicsRouter.get("/", (req, res) => {
  return res
    .status(200)
    .json({
      message: "comic router works!"
    })
})

//TODO: need a route to get all owned comics

comicsRouter.get("/getcomicbooks", async (req, res) => {
  const pageNumber = req.query['page'] || 1;
  let comicBooks;
  console.log(pageNumber); 
  if (req.query['storyArc']) {
    comicBooks = await getComicBooksByStoryArc(req.app.get("db"), req.query['storyArc'], 10, pageNumber);
  } else if (req.query['character']) {
    comicBooks = await getComicBooksByCharacter(req.app.get("db"), req.query['character'], 10, pageNumber);
  } else if (req.query['issueName']) {
    comicBooks = await getComicBooksByIssue(req.app.get("db"), req.query['issueName'], 10, pageNumber);
  } else if (req.query['seriesName']) {
    comicBooks = await getComicBooksBySeries(req.app.get("db"), req.query['seriesName'], 10, pageNumber);
  } else if (req.query['comicBookId']) {
    comicBooks = await getComicBookById(req.app.get("db"), req.query['comicBookId'], 10, pageNumber);
  } else {
    comicBooks = await getComicBooks(req.app.get("db"), 10, pageNumber);
  }
  return res
    .status(200)
    .json({
      comics: comicBooks
    })
})


//TODO: need a route to look up comics with isbn

comicsRouter.get("/isbnlookup", async (req, res) => {
  const isbn = req.query['isbn'];
  console.log(isbn);
  let comicBookInfo = [];
  const isbnInfo = await ISBNLookup(isbn);
  console.log('isbnInfo', isbnInfo);
  if (isbnInfo.dataLength > 1) {
    // Need to add the mapping
  } else if (isbnInfo.dataLength === 1) {
    const info = await getComicByIssue(isbnInfo.data[0]["id"]);
    console.log('info', info);
    comicBookInfo.push(info)
  }
  return res
    .status(200)
    .json(comicBookInfo)
})

//TODO: need a route to add a comic book to my collection

comicsRouter.post("/addcomic", async (req, res) => {
  console.log('body', req.body);
  const uploadedComicInfo = await uploadComic(req.app.get("db"), req.body);
  return res
    .status(201)
    .json({ 
      message: `created comic book with id - ${req.body.id}`, 
      uploadedComicInfoID: req.body.id
    })
})


//TODO: maybe a route that looks up comic books by story arcs



module.exports = comicsRouter;