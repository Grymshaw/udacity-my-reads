import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

import Bookshelf from './Bookshelf';
import SearchBar from './SearchBar';

export default class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state= {
      results: []
    };
  }

  getBooks = (query) => {
    BooksAPI.search(query).then(results => {
      console.log(results);
      if(results && !results.error) {
        this.setState({ results });
      } else {
        this.setState({ results: [] })
      }
    });
  };

  render() {
    const { results } = this.state;
    return (
      <div className="search-books">
        <SearchBar
          onCloseSearch={this.props.onCloseSearch}
          onInputChange={this.getBooks}
        />
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
