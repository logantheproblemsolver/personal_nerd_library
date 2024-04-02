const ComicDatabaseService = {
  getAllComicBooks(knex, perPage, pageNumber) {
    console.log({ perPage, pageNumber  })
    return knex
      .select('title', 'name', 'description', 'number', 'cover_image')
      .from('comic_books')
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
  },
  getComicBooksByStoryArc(knex) {

  },
  getComicBooksByCharacter(knex) {

  },
  getComicBooksByIssue(knex) {

  },
  uploadComicBook(knex, comicBookInfo) {
    return knex
      .insert({
        "id": comicBookInfo["id"],
        "publisher": comicBookInfo["publisher"],
        "sort_name": comicBookInfo["sort_name"],
        "number": comicBookInfo["number"],
        "title": comicBookInfo["title"],
        "name": comicBookInfo["name"],
        "isbn": comicBookInfo["isbn"],
        "page_count": comicBookInfo["page_count"],
        "description": comicBookInfo["description"],
        "cover_image": comicBookInfo["cover_image"],
        "story_arcs": JSON.stringify(comicBookInfo["story_arcs"]),
        "credits": JSON.stringify(comicBookInfo["credits"]),
        "characters": JSON.stringify(comicBookInfo["characters"]),
        "teams": JSON.stringify(comicBookInfo["teams"]),
        "variant_covers": JSON.stringify(comicBookInfo["variant_covers"]),
        "comic_vine_id": comicBookInfo["comic_vine_id"],
        "resource_url": comicBookInfo["resource_url"],
        "owner": comicBookInfo["owner"]
      })
      .into('comic_books')
  }
};


module.exports = ComicDatabaseService;