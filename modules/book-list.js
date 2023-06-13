import { addBook, removeBook } from './bookUtils.js';

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
    const bookList = document.getElementById('booklist');
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    table.innerHTML = `
        <tr>
        <td>
          "${book.title}" by 
          ${book.author}
          </td>
          <td>
          <button type="button" class="remove-btn">Remove</button></td>
        </tr>
      `;
    bookList.appendChild(table);

    const removeButton = table.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => {
      this.removeBook(book);
      table.remove();
    });
  }

  removeBook = (book) => {
    removeBook(this, book);
  }
}

export default BookList;