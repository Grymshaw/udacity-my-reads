import React, { Component } from 'react';

import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {
  render() {
    const { allBooks } = this.props;

    return (
      <div className="list-books-content">
        <Bookshelf
          name="Reading"
          books={allBooks.filter(book => book.body === 'currentlyReading')}
        />
        <Bookshelf
          name="Want to Read"
          books={allBooks.filter(book => book.body === 'wantToRead')}
        />
        <Bookshelf
          name="Read"
          books={allBooks.filter(book => book.body === 'read')}
        />
      </div>
    );
  }
}
