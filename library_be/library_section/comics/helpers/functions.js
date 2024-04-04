const ComicDatabaseService = require("./databaseFunctions.js");

//need a function that gets first 30 comics from database and handles pagination

const getComicBooks = async (db, perPage, page) => {
  console.log(page);
  const comicBooks = await ComicDatabaseService.getAllComicBooks(db, parseInt(perPage), parseInt(page));
  return comicBooks;
}


//need a function that gets comics based off of filters (characters, story arcs, etc)
const getComicBooksByStoryArc = async (db, storyArc, perPage, pageNumber) => {

};

const getComicBooksByCharacter = async (db, character, perPage, pageNumber) => {
  
};

const getComicBooksByIssue = async (db, issueName, perPage, pageNumber) => {

};


const getComicBooksBySeries = async (db, seriesName, perPage, pageNumber) => {

};


const getComicBookById = async (db, comicBookId, perPage, pageNumber) => {

};
/*

comicBooks = await (req.app.get("db"), req.query['storyArc'], 10, pageNumber);
} else if (req.query['character']) {
  comicBooks = await getComicBooksByCharacter(req.app.get("db"), req.query['character'], 10, pageNumber);
} else if (req.query['issueName']) {
  comicBooks = await getComicBooksByIssue(req.app.get("db"), req.query['issueName'], 10, pageNumber);
} else if (req.query['seriesName']) {
  comicBooks = await getComicBooksBySeries(req.app.get("db"), req.query['seriesName'], 10, pageNumber);
} else if (req.query['comicBookId']) {
  comicBooks = await getComicBookById(req.app.get("db"), req.query['comicBookId'], 10, pageNumber);
*/
//need a function that uploads comics

const uploadComic = async (db, comicBookInfo) => {
  const uploadedComic = await ComicDatabaseService.uploadComicBook(db, comicBookInfo);
  console.log('uploadedComic', uploadedComic);
  return uploadedComic;
};

//need a function that updates the comic book with story arcs database 



module.exports = { uploadComic, getComicBooks };