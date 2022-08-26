function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

/* NOTES: buildMainCharacter has a parameter of values that can be interchangeable with assigned values. */
function buildMainCharacter(name, age, pronouns) {
  var mainCharacter =  {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter
}

// LINE66 calls for 2 params
// LINE 65 is calling from a dynamic array created on LINE61. shoutOuts becomes a new dynamic array based on params given for the function.
function saveReview(shoutOuts, reviews) {
  if (reviews.includes(shoutOuts) === false)
    return reviews.push(shoutOuts)
  }


function calculatePageCount(bookTitle) {
   var pageCount = (bookTitle.length)*20
   return pageCount
}

function writeBook(title, character, type) {
  return {
      title: title,
      mainCharacter: character,
      pageCount: calculatePageCount(title),
      genre: type
    }
}

//calling back to the page count that was within the function above
function editBook(book) {
  book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
