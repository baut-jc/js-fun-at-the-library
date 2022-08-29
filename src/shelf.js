function shelfBook(section, sciFiShelf) {
    if (sciFiShelf.length < 3)
    return sciFiShelf.unshift(section)
}

function unshelfBook(title, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (title === sciFiShelf[i].title) {
      sciFiShelf.splice(i, 1)
      return(title, sciFiShelf)
    }
  }
}

function listTitles(fantasyShelf) {
  var shelves = []
  for (var i = 0; i < fantasyShelf.length; i++) {
    shelves.push(fantasyShelf[i].title)
}
  return shelves.join(", ")
}

function searchShelf(shelf, bookTitle) {
  // var bookTitles = [book.title]
  // console.log(bookTitles)
  for (var i = 0; i < shelf.length; i++) {
    var bookTitles = []
      bookTitles.push(shelf[i].title)
}
  if (bookTitles.includes(bookTitle)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
