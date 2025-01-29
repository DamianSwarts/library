const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
    }    
}


function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
    const book = new Book(title, author, pages, read);
	myLibrary.push(book);
}