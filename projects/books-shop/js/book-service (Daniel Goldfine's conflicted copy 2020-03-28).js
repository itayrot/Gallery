'use strict';

const KEY = "books-list"
const gBooksNames = [
    "traditional_magic_spells",
    "the_book_of_magic",
    "defence_against_spells",
    "Regular_Expressions",
    "flight_of_the_gazebo",
    "the_white_magic_spell",
    "beginner_wizard",
    "Regular_Expressions2",
]

var gBooks = [];
var gIsRead = false;


function getBooks() {

    return gBooks
}


function _createBook(name) {
    var book = {
        id: makeId(),
        name: name,
        price: getRandomIntInclusive(100, 300),
        imgUrl: name,
        rate: getRandomIntInclusive(0, 10),
        breaf: ""
    }
    return book
}


function _createBooks() {

    var books = loadFromStorage(KEY)
    if (!books || !books.length) {

        var books = gBooksNames.map(currBook => {
            return _createBook(currBook)
        })
    }
    gBooks = books
    saveToStorage(KEY, gBooks)
}


function deleteBook(bookId) {
    var bookIdx = findBookIdx(bookId)
    gBooks.splice(bookIdx, 1);
    saveToStorage(KEY, gBooks);

}

function updateBook(bookId) {
    var newPrice = +prompt("please put a new price")
    if (newPrice < 0) {
        alert(" please inert 0 or bigger ")
        updateBook(bookId)
    }
    var bookIdx = findBookIdx(bookId)

    gBooks[bookIdx].price = newPrice
    saveToStorage(KEY, gBooks);
}

function increasRate(currRate, bookIdx) {
    var newRate = currRate + 1;
    gBooks[bookIdx].rate = newRate
    saveToStorage(KEY, gBooks)
}

function decreasRate(currRate, bookIdx) {
    var newRate = currRate - 1;
    gBooks[bookIdx].rate = newRate
    saveToStorage(KEY, gBooks)
}

function findBookIdx(bookId) {
    var bookIdx = gBooks.findIndex(book => {
        return book.id === bookId
    })
    return bookIdx;
}


//////////////////////////
function randWords() {
    var r_text = new Array();
    r_text[0] = "Twenty years ago Lazlo’s parents died in a war";
    r_text[1] = "When Lazlo was five years old, the name of the Unseen city was stolen from his mind";
    r_text[2] = "Henry walks in dreams, searching for Louis.  He sees Ling Chan in one of them and goes to find her in real life";
    r_text[3] = "Ms. Proctor, one of the old ladies who live in Will’s building, continues to perform rituals that she believes will keep the dead away.";
    r_text[4] = "Seventeen years ago, King Gaius took a potion from his mother, Selia.";
    r_text[5] = "Call and Aaron have spent the summer with Call’s father, Alastair";
    r_text[6] = "California dreaming, On such a winter's day";
    var i = 0;
    var text = "";
    for (var i = 0; i < 5; i++) {

        i = Math.floor(5 * Math.random())
        text += (r_text[i]);
    }

    return text
}