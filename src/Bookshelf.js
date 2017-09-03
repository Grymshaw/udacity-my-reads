import React, { Component } from 'react';
import './Bookshelf.css';

import Book from './Book';
import BookshelfHeader from './BookshelfHeader';

export default class Bookshelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  toggleShelfHidden = () => {
    this.setState((prev) => {
      return { hidden: !prev.hidden };
    });
  };

  render() {
    const { name, onAddBook } = this.props;
    let { alreadyAdded, books } = this.props;
    const { hidden } = this.state;

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
          hidden={hidden}
          onShelfToggle={this.toggleShelfHidden}
        />
        <div className={`bookshelf-books ${hidden ? 'hidden' : ''}`}>
          <ol className={`books-grid ${hidden ? 'hidden' : ''}`}>
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
