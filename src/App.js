import React, { Component } from 'react';
import './App.css';

import ListBooks from './ListBooks';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ListBooks
          allBooks={{}}
        />
      </div>
    );
  }
}

export default App;
