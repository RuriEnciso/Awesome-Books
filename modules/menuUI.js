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
  Contact.innerHTML = `
  <h2>Contact Us</h2>
  <p>Do have any questions or you just want to say "Hello"?
  You can reach out to us!</p>
  <ul>
    <li>Our e-mail: mail@mail.com</li>
    <li>Our phone number: 00*********</li>
    <li>Our address: Streetname #,City, Pakistan, Peru & Venezuela.</li>
  </ul>`;
};

export { showList, showAddBook, showContact };