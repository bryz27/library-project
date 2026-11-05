// const myLibrary = [];

// function Book(id, title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     let id = crypto.randomUUID();
//     this.id = id;
// }

// function addBookToLibrary(book) {
//     myLibrary.push(book);
// }

// function displayBooks() {
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.log(`Book ${i + 1}: ${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, Read: ${myLibrary[i].read}. ID: ${myLibrary[i].id}`);
//     }
// }

const closeBtn = document.querySelector('#btn-close');
const newBookDialog = document.querySelector('#new-book');

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    newBookDialog.close();
});