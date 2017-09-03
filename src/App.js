import * as BooksAPI from './BooksAPI';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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

  addBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      })
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <div className="list-books-title">
              <h1>My Bookshelf</h1>
            </div>
            {books.length
              ? <ListBooks
                  allBooks={books}
                  onMoveBook={this.addBook}
                />
              : ''
            }
            <OpenSearch />
          </div>)} />

        <Route exact path="/search" render={() => (
          <SearchBooks
            alreadyAdded={books}
            onAddBook={this.addBook}
          /> )} />
      </div>
    );
  }
}

export default App;
