import React, { Component } from 'react';

import Book from './Book';
import BookshelfHeader from './BookshelfHeader';

export default class Bookshelf extends Component {
  render() {
    const { name, books } = this.props;

    return (
      <div className="bookshelf">
        <BookshelfHeader
          name={name}
        />
        {books.map((book) => (
          <Book
            book={book}
          />
        ))}
      </div>
    );
  }
}
