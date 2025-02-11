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

// Call the function to add some book objects to the array
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 336, 'Not read yet');
addBookToLibrary('Don Quixote', 'Miguel de Cervantes Saavedra', 1072, 'Read');
addBookToLibrary('War and Peace', 'Leo Tolstoy', 1225, 'Not read yet');
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 288, 'Read');
addBookToLibrary('Fourth Wing', 'Rebecca Yarros', 517, 'Read');
addBookToLibrary('The Housemaid', 'Freida McFadden', 336, 'Read');
addBookToLibrary('A Little Life', 'Hanya Yanagihara', 720, 'Not read yet');
addBookToLibrary('Small Things Like These', 'Claire Keegan', 128, 'Read');


// Function that loops through the array 
// and displays each book in a card on the page
function displayBooks(library) {
  library.forEach(book => {
      // Create card elements
      let card = document.createElement('div');
      card.classList.add('card');

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