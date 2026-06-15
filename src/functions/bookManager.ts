import type { Book } from './../types/index';
import { Books } from '../data/books';

export function addBook(prop: Book): void {
  Books.push(prop);
  console.log(`${prop.title} has been added to the list`);
}

export function listBooks(): void {
  if (Books.length === 0) {
    console.log("You don't have any book");
  } else {
    console.log('\n=== List of Books ===');

    Books.forEach((book, index) => {
      console.log(
        `${index + 1}. Title: ${book.title} | Author: ${book.author} | Year: ${book.publicationYear}`
      );
    });
  }
}

export function searchBook(title?: string): void {
  if (!title) {
    console.log("No books found, here's the list of books you have:");
    listBooks();
    return;
  }

  const searchKeyword = title.toLowerCase();

  const foundBook = Books.filter((book) =>
    book.title.toLowerCase().includes(searchKeyword)
  );

  if (foundBook.length === 0) {
    console.log(`No book found with the title containing "${searchKeyword}"`);
  } else {
    console.log(`Search result of ${searchKeyword}`);
    foundBook.forEach((book, index) => {
      console.log(
        `${index + 1}. Title: ${book.title} | Author: ${book.author} | Year: ${book.publicationYear}`
      );
    });
  }
}
