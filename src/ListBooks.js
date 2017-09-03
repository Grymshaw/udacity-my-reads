import React, { Component } from 'react';

import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {
  render() {
    const { allBooks, onMoveBook } = this.props;
    console.log(allBooks);

    return (
      <div className="list-books-content">
        <Bookshelf
          name="Reading"
          books={allBooks.filter(book => book.shelf === 'currentlyReading')}
          onAddBook={onMoveBook}
        />
        <Bookshelf
          name="Want to Read"
          books={allBooks.filter(book => book.shelf === 'wantToRead')}
          onAddBook={onMoveBook}
        />
        <Bookshelf
          name="Read"
          books={allBooks.filter(book => book.shelf === 'read')}
          onAddBook={onMoveBook}
        />
      </div>
    );
  }
}
