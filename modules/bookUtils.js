import Book from './book.js';

export const addBook = (bookList) => {
  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', () => {
    const storedTitle = localStorage.getItem('title');
    const storedAuthor = localStorage.getItem('author');

    if (storedTitle && storedAuthor) {
      document.getElementById('title').value = storedTitle;
      document.getElementById('author').value = storedAuthor;
    }

    const titleInput = document.getElementById('title').value;
    const authorInput = document.getElementById('author').value;

    const book = new Book(titleInput, authorInput);
    bookList.books.push(book);

    localStorage.setItem('title', '');
    localStorage.setItem('author', '');
    localStorage.setItem('books', JSON.stringify(bookList.books));

    bookList.displayBook(book);
  });
};

export const removeBook = (bookList, book) => {
  const index = bookList.books.indexOf(book);
  if (index !== -1) {
    bookList.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookList.books));
  }
};
