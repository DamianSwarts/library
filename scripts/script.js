// Get the container element
var container = document.getElementById('container');
// Get the modal modal
var modal = document.getElementById('modal');
// Get the button element that opens the modal modal
var btn = document.querySelector('.new-book');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Load the library array from localStorage or initialize an empty array if not present
// Did this to ensure that the book objects that the user adds does not get removed when the page refreshes/closes
let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

if (myLibrary.length === 0) {
    addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 336, 'Not read yet');
    addBookToLibrary('Don Quixote', 'Miguel de Cervantes Saavedra', 1072, 'Read');
    addBookToLibrary('War and Peace', 'Leo Tolstoy', 1225, 'Not read yet');
    addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 288, 'Read');
    addBookToLibrary('Fourth Wing', 'Rebecca Yarros', 517, 'Read');
    addBookToLibrary('The Housemaid', 'Freida McFadden', 336, 'Read');
    addBookToLibrary('A Little Life', 'Hanya Yanagihara', 720, 'Not read yet');
    addBookToLibrary('Small Things Like These', 'Claire Keegan', 128, 'Read');

    saveLibrary();
}

// Save the library array to localStorage
function saveLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

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
    saveLibrary();
};

// Function that loops through the array 
// and displays each book in a card on the page
function displayBooks(library) {
    // Clear the container to prevent duplicates
    container.innerHTML = '';
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
      console.log(book);
    });
};

// Call the function to display books
displayBooks(myLibrary);

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// Function to handle modal submission
modal.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the modal from submitting the traditional way
    
    // Get modal data
    const title = modal.elements['title'].value;
    const author = modal.elements['author'].value;
    const pages = modal.elements['pages'].value;
    const read = modal.elements['read'].value;
    
    // Add the new book to the library
    addBookToLibrary(title, author, pages, read);
    
    // Clear the modal fields after submission
    modal.reset();
    
    // Close the modal after submission
    modal.style.display = "none";
    
    // Call the function to display books (update the displayed books)
    displayBooks(myLibrary);
});