import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        Book
      </div>
    );
  }
}
