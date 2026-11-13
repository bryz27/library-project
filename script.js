const myLibrary = [];

const closeBtn = document.getElementById('btn-close');
const newBookDialog = document.getElementById('new-book');
const submitBtn = document.getElementById('btn-submit');

const txtTitle = document.getElementById('title');
const txtAuthor = document.getElementById('author');
const txtPages = document.getElementById('pages');
const chkRead = document.getElementById('read');

const listContainer = document.querySelector('.list-container');
const form = document.getElementById('form');
const bookTemplate = document.getElementById('book-card-template');

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    listContainer.replaceChildren();

    myLibrary.forEach((book) => {
        const cardNode = bookTemplate.content.cloneNode(true);

        cardNode.querySelector('.book-title').textContent = book.title;
        cardNode.querySelector('.book-author').textContent = `By ${book.author}`;
        cardNode.querySelector('.book-pages').textContent = `${book.pages} pages`;
        cardNode.querySelector('.book-read').textContent = book.read ? 'Status: Read' : 'Status: Not read yet';

        listContainer.appendChild(cardNode);
    });
}

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    newBookDialog.close();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newBook = new Book(
        txtTitle.value,
        txtAuthor.value,
        txtPages.value,
        chkRead.checked
    );

    addBookToLibrary(newBook);
    displayBooks();

    form.reset();
    newBookDialog.close()
});