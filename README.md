# Library App

This Library App was completed as part of [The Odin Project's Curriculum](https://www.theodinproject.com/). It serves as a practical way to learn about object constructors and factory functions.

## Features

- Add books to your library.
- View all books in your library.
- Update the status of a book (Read/Not read yet).
- Delete books from your library.
- Stores the library in localStorage to persist data between sessions.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/library-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd library-app

    ```
3. Open the `index.html` file in your browser to see the app in action.

## Code Overview

- The library array is loaded from `localStorage` or initialized as an empty array if not present.
- Book objects are created using a constructor function and stored in the library array.
- The library is saved to `localStorage` after any changes.
- The app allows users to add, update, and delete books in the library.

## Learning Outcomes

- Understanding of object constructors and factory functions in JavaScript.
- Familiarity with localStorage for data persistence.
- Experience with DOM manipulation and event handling.

## Usage

- Click on the "+" button to open the modal form.
- Fill in the book details and submit the form to add a book to the library.
- Use the "Change Status" button to change the read status of a book.
- Use the delete button (🗑️) to remove a book from the library.

## Credits

- This project was completed as part of [The Odin Project](https://www.theodinproject.com/).

