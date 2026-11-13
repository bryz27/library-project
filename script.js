const myLibrary = [];

const closeBtn = document.getElementById('btn-close');
const newBookDialog = document.getElementById('new-book');

const txtTitle = document.getElementById('title');
const txtAuthor = document.getElementById('author');
const txtPages = document.getElementById('pages');
const chkRead = document.getElementById('read');

const listContainer = document.getElementsByClassName('list-container');

function Book(id, title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    let id = crypto.randomUUID();
    this.id = id;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    listContainer.replaceChildren();
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(`Book ${i + 1}: ${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, Read: ${myLibrary[i].read}. ID: ${myLibrary[i].id}`);
    }
}

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    newBookDialog.close();
});