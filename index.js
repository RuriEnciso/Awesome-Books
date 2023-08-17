/* eslint-disable */
import BookList from './modules/book-list.js';

import {
  Booklink, Addlink, Contactlink,
} from './modules/elements.js';

import * as menu from './modules/menuUI.js';

import { DateTime } from './modules/luxon.js';

const CurrentDate = () => {
  const dateElement = document.getElementById('date');
  dateElement.textContent = DateTime.now().toFormat('LLLL d yyyy, hh:mm:ss a');
}
setInterval(CurrentDate, 1000);

const bookListInstance = new BookList();

Booklink.addEventListener('click', menu.showList);
Addlink.addEventListener('click', menu.showAddBook);
Contactlink.addEventListener('click', menu.showContact);

