import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import ListBooks from './ListBooks';
import OpenSearch from './OpenSearch';
import SearchBooks from './SearchBooks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {/*TODO: add route for list and search*/}
        <div className="list-books-title">
          <h1>My Bookshelf</h1>
        </div>
        <ListBooks
          allBooks={books}
        />
        <OpenSearch />

        <SearchBooks />

      </div>
    );
  }
}

export default App;
