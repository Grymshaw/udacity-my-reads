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
      books: [],
      isSearching: false
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  addBook = (book, shelf) => {
    // BooksAPI.update(book, shelf).then(book => {
    //   this.setState(prev => { return { books: prev.books.push(book) }; });
    // });
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      })
    });
  };

  toggleIsSearching = () => {
    this.setState(prevState => { return { isSearching: !prevState.isSearching }; });
  }

  render() {
    const { books, isSearching } = this.state;
    return (
      <div className="app">
        {!isSearching
        ?
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
          <OpenSearch onOpenSearch={this.toggleIsSearching}/>
        </div>
        :
        <SearchBooks
          onCloseSearch={this.toggleIsSearching}
          onAddBook={this.addBook}
        />
        }

      </div>
    );
  }
}

export default App;
