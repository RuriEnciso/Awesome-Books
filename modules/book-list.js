import { addBook, removeBook } from './bookUtils.js';
import displayBook from './displayBook.js';

class BookList {
  constructor() {
    this.books = [];
    this.addBook();
    this.loadBooks();
  }

  addBook = () => {
    addBook(this);
  }

  loadBooks = () => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
      this.books.forEach((book) => {
        this.displayBook(book);
      });
    }
  }

  displayBook = (book) => {
    displayBook(book, document.getElementById('booklist'), this.removeBook);
  }

  removeBook = (book) => {
    removeBook(this, book);
  }
}

export default BookList;