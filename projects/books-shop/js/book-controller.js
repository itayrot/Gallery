'use strict';
var gIsRateChange = false;

function onIinit() {
    _createBooks();
    renderBooks()
}

////////////////test//////////
function renderBooks() {

    const books = getBooks()

    var elBooks = document.querySelector(".books-container")
    var strHTML = "";

    books.map(book => {
        strHTML += `<article class = "book-box book${book.id}">\n
                        <span class="book-headline">${book.name}</span>\n
                        <img class = "book-img" src = "imgs/${book.imgUrl}.jpg" alt="${book.name}">\n
                        <div class = "book-details">\n 
                        <span class = "price">price: ${book.price} $</span>\n

                            <div class = "book-btns">\n
                                <button class="btn" onclick ="onReadBook('${book.id}')">Read</button>\n
                                <button class="btn" onclick ="onUpdateBook('${book.id}')">Update</button>\n
                                <button class="btn" onclick ="onDeleteBook('${book.id}')">Delete</button>\n
                            </div>
                        </div>\n
                    </article>\n`
    })
    elBooks.innerHTML = strHTML;
}


function renderModal(bookId) {

    setModalData()

    if (gIsRead && !gIsRateChange) return;
    gIsRead = true;
    var bookIdx = findBookIdx(bookId)
    var bookName = gBooks[bookIdx].name
    var bookPic = gBooks[bookIdx].imgUrl
    var bookRate = gBooks[bookIdx].rate

    var strHTML = `<div class ="first-modal-headline"> 
                        <button class="btn-modal" onclick="onCloseModal()" >X</button>\n
                        <span class= "modal-bookname">${bookName}</span>\n
                        <img class = "modal-book-img" src = "imgs/${bookPic}.jpg">\n 
                    </div>                 
                   
                    <div>
                        rate the book:
                        <button class="btn" onclick="onIncreasRate(${bookRate},${bookIdx})">+</button>
                        <span class="rate">${bookRate}</span>
                        <button class="btn" onclick="onDecreasRate(${bookRate},${bookIdx})">-</button>
                    </div> `

    document.querySelector(".modal-headline").innerHTML += strHTML;

    document.querySelector(".rate").innerText = bookRate;

    renderBreafBook(bookIdx)
}

function renderBreafBook(bookIdx) {
    var isBreaf = gBooks[bookIdx].breaf
    if (isBreaf === "")
        gBooks[bookIdx].breaf = randWords();
    saveToStorage(KEY, gBooks)
    document.querySelector(".modal-center").innerHTML = gBooks[bookIdx].breaf;
}


function onDeleteBook(bookId) {
    deleteBook(bookId);
    renderBooks()
}

function onUpdateBook(bookId) {
    updateBook(bookId);
    renderBooks()
}

function onReadBook(bookId) {
    document.querySelector('.book-modal').classList.remove("hide")
    renderModal(bookId);
}

function onCloseModal() {
    gIsRead = false;
    document.querySelector(".book-modal").classList.add("hide")
    setModalData()
}

function onIncreasRate(currRate, bookIdx) {
    gIsRateChange = true
    increasRate(currRate, bookIdx);

    var bookId = gBooks[bookIdx].id
    renderModal(bookId)
}


function onDecreasRate(currRate, bookIdx) {
    gIsRateChange = true
    decreasRate(currRate, bookIdx);

    var bookId = gBooks[bookIdx].id
    renderModal(bookId)
}

function setModalData() {
    document.querySelector(".modal-center").innerHTML = "";
    document.querySelector(".modal-headline").innerHTML = "";
}