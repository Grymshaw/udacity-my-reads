import React, { Component } from 'react';

import Bookshelf from './Bookshelf';

export default class ListBooks extends Component {
  render() {
    return (
      <div className="book-list">
        <Bookshelf
          name="Reading"
          books={[]}
        />
        <Bookshelf
          name="Want to Read"
          books={[]}
        />
        <Bookshelf
          name="Read"
          books={[]}
        />
      </div>
    );
  }
}
