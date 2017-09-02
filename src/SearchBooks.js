import React, { Component } from 'react';

import Bookshelf from './Bookshelf';
import SearchBar from './SearchBar';

export default class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state= {
      results: []
    };
  }

  render() {
    const { results } = this.state;
    return (
      <div className="search-books">
        <SearchBar />
        <div className="search-books-results">
          <Bookshelf
            name='Search results'
            books={results}
          />
        </div>
      </div>
    );
  }
}
