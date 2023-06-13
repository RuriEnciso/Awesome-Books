import BookList from './modules/book-list.js';

import {
  Booklink, Addlink, Contactlink,
} from './modules/elements.js';

import * as menu from './modules/menuUI.js';

import CurrentDate from './modules/dateModule.js';

const bookListInstance = new BookList();

Booklink.addEventListener('click', menu.showList);
Addlink.addEventListener('click', menu.showAddBook);
Contactlink.addEventListener('click', menu.showContact);
const bookToRemove = bookListInstance.books[0];
bookListInstance.removeBook(bookToRemove);

window.onload = () => CurrentDate();
