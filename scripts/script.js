// Get the container element
var container = document.getElementById('container');

// Empty array in which all book objects will be stored
const myLibrary = [];

// Constructor function to create book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
};

function addBookToLibrary(title, author, pages, read) {
  // Take params, create a book then store it in the array
    const book = new Book(title, author, pages, read);
	  myLibrary.push(book);
};

// Function that loops through the array 
// and displays each book in a card on the page
function displayBooks(library) {
  library.forEach(book => {
      // Create card elements
      let card = document.createElement('div');
      card.classList.add('card');
      card.classList.add(book.title);

      let title = document.createElement('h2');
      title.textContent = book.title;

      let author = document.createElement('p');
      author.textContent = `Author: ${book.author}`;

      let pages = document.createElement('p');
      pages.textContent = `Pages: ${book.pages}`;

      let read = document.createElement('p');
      read.textContent = `Status: ${book.read}`;

      // Append elements to the card
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);

      // Append card to the container
      container.appendChild(card);
  });
};

// Call the function to display books
displayBooks(myLibrary);