'use strict';

const KEY = "books-list"
const gBooksDetails = [
    { name: "Traditional Magic Spells", id: 1 },
    { name: "The Book Of Magic", id: 2 },
    { name: "Defence Against Spells", id: 3 },
    { name: "Regular Expressions", id: 4 },
    { name: "Flight Of The Gazebo", id: 5 },
    { name: "The White Magic Spell", id: 6 },
    { name: "Beginner Wizard", id: 7 },
    { name: "Regular Expressions 2", id: 8 }
]

var gBooks = [];
var gIsRead = false;


function getBooks() {
    return gBooks
}


function _createBook(gBooksDetails) {
    var book = {
        id: makeId(),
        name: gBooksDetails.name,
        price: getRandomIntInclusive(100, 300),
        imgUrl: gBooksDetails.id,
        rate: getRandomIntInclusive(0, 10),
        breaf: ""
    }
    return book
}


function _createBooks() {

    var books = loadFromStorage(KEY)
    if (!books || !books.length) {

        var books = gBooksDetails.map(currBook => {
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