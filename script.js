const myLibrary = [];

const closeBtn = document.getElementById('btn-close');
const newBookDialog = document.getElementById('new-book');
const submitBtn = document.getElementById('btn-submit');

const txtTitle = document.getElementById('title');
const txtAuthor = document.getElementById('author');
const txtPages = document.getElementById('pages');
const chkRead = document.getElementById('read');

const listContainer = document.getElementsByClassName('list-container');
const form = document.getElementById('form');

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
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(`Book ${i + 1}: ${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, Read: ${myLibrary[i].read}. ID: ${myLibrary[i].id}`);
    }
}

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    newBookDialog.close();
});

form.addEventListener('submit', (event)=>{
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
})