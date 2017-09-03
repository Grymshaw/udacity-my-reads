import React, { Component } from 'react';

import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {
  render() {
    const { allBooks, onMoveBook } = this.props;

    return (
      <div className="list-books-content">
        <Bookshelf
          alreadyAdded={[]}
          name="Currently Reading"
          books={allBooks.filter(book => book.shelf === 'currentlyReading')}
          onAddBook={onMoveBook}
        />
        <Bookshelf
          alreadyAdded={[]}
          name="Want to Read"
          books={allBooks.filter(book => book.shelf === 'wantToRead')}
          onAddBook={onMoveBook}
        />
        <Bookshelf
          alreadyAdded={[]}
          name="Read"
          books={allBooks.filter(book => book.shelf === 'read')}
          onAddBook={onMoveBook}
        />
      </div>
    );
  }
}
