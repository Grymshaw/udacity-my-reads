import React, { Component } from 'react';

import Book from './Book';
import BookshelfHeader from './BookshelfHeader';

export default class Bookshelf extends Component {
  render() {
    const { name, onAddBook } = this.props;
    let { alreadyAdded, books } = this.props;

    books = books.map(book => {
      //get book if it's already in our a shelf
      const addedBook = alreadyAdded.filter(cur => cur.id === book.id);
      //use that one so we know the shelf it's already in; otherwise, use the new book
      return addedBook.length
        ? addedBook[0]
        : book;
    });

    return (
      <div className="bookshelf">
        <BookshelfHeader
          name={name}
        />
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                onAddBook={onAddBook}
              />)
            )}
          </ol>
        </div>
      </div>
    );
  }
}
