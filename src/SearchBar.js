import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        {/*TODO: add link back to main page*/}
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"/>
        </div>
      </div>
    );
  }
}
