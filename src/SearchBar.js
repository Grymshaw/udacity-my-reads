import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
    this.props.onInputChange(this.state.query);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search" />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}
