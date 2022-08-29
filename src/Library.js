function createLibrary(name, type) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
      },
    }
  return library
}

function addBook(library, title) {
  var genre = library.shelves
  for (var i = 0; i < genre.length; i++)
    genre.push(title)
    console.log(genre)
}

// function checkOut(){
//
// }
//library.shelves.genre

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
