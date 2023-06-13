import {
  Booklist, AddBook, Contact,
} from './elements.js';

const showList = () => {
  Booklist.style.display = 'block';
  AddBook.style.display = 'none';
  Contact.style.display = 'none';
};

const showAddBook = () => {
  Booklist.style.display = 'none';
  AddBook.style.display = 'block';
  Contact.style.display = 'none';
};

const showContact = () => {
  Booklist.style.display = 'none';
  AddBook.style.display = 'none';
  Contact.style.display = 'flex';
};

export { showList, showAddBook, showContact };