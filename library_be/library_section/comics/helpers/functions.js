const ComicDatabaseService = require("./databaseFunctions.js");

//need a function that gets first 30 comics from database and handles pagination

const getComicBooks = async (db, page) => {
  console.log(page);
  const comicBooks = await ComicDatabaseService.getAllComicBooks(db);
  return comicBooks;
}


//need a function that gets comics based off of filters (characters, story arcs, etc)

//need a function that uploads comics

const uploadComic = async (db, comicBookInfo) => {
  const uploadedComic = await ComicDatabaseService.uploadComicBook(db, comicBookInfo);
  console.log('uploadedComic', uploadedComic);
  return uploadedComic;
};

//need a function that updates the comic book with story arcs database 



module.exports = { uploadComic, getComicBooks };