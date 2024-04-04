const ComicDatabaseService = {
  getAllComicBooks(knex, perPage, pageNumber) {
    console.log({ perPage, pageNumber  })
    return knex
      .select('id', 'title', 'name', 'description', 'number', 'cover_image')
      .from('comic_books')
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
  },
  getAllComicBooksByStoryArc(knex, storyArc, perPage, pageNumber) {
    console.log("storyArc", storyArc);
    return knex
      .select('*')
      .from('comic_book_with_story_arc')
      .where('story_arc_name', '=', storyArc)
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
  },
  getAllComicBooksByCharacter(knex, character, perPage, pageNumber) {
    console.log("character", character);
    return knex
      .select('*')
      .from('user_comic_books_with_characters')
      .where('character_name', '=', character)
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
  },
  getAllComicBooksByIssue(knex, issueName, perPage, pageNumber) {
    console.log("issue name: ", issueName);
    return knex
      .select('title', 'name', 'description', 'number', 'cover_image')
      .from('comic_books')
      .where('name', '=', issueName)
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
  },
  getAllComicBooksBySeries(knex, seriesName, perPage, pageNumber) {
    console.log('series name: ', seriesName);
    return knex
      .select('title', 'name', 'description', 'number', 'cover_image')
      .from('comic_books')
      .where('title', '=', seriesName)
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
  },
  getAllComicBooksByCreators(knex, creatorName, perPage, pageNumber) {
    console.log('creator name', creatorName);
    return knex
      .select('*')
      .from('comic_books_and_creators')
      .where('creator_name', '=', creatorName)
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
  },
  getAllComicBookById(knex, comicBookId, perPage, pageNumber) {
    console.log('comic book id', comicBookId);
    return knex 
      .select('*')
      .from('comic_books')
      .where('id', '=', comicBookId)
      .paginate({ perPage: perPage, currentPage: pageNumber, isLengthAware: true })
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
  },
  uploadComicBookRelatedStoryArcs(knex, comicBookId, storyArcId) {
    console.log('story arc id', storyArcId);
    console.log('comic book id', comicBookId);
    return knex 
      .insert({
        'comic_book': comicBookId,
        'story_arc': storyArcId
      })
      .into('comic_book_with_story_arc')
  },
  uploadComicBookRelatedCharacters(knex, comicBookId, characterName, characterId) {
    console.log('comic book id', comicBookId);
    console.log('character name', characterName);
    console.log('character id', characterId); 
    return knex
      .insert({
        
      })
      .into('user_comic_books_with_characters')
  }
};


module.exports = ComicDatabaseService;