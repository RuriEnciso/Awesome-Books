const displayBook = (book, bookListElement, removeBookCallback) => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');
  table.innerHTML = `
      <tr>
        <td>
          "${book.title}" by 
          ${book.author}
        </td>
        <td>
          <button type="button" class="remove-btn">Remove</button>
        </td>
      </tr>
    `;
  bookListElement.appendChild(table);

  const removeButton = table.querySelector('.remove-btn');
  removeButton.addEventListener('click', () => {
    removeBookCallback(book);
    table.remove();
  });
};

export default displayBook;
