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
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <Book key={book.id} book={book}/>)}
          </ol>
        </div>
      </div>
    );
  }
}
