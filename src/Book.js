import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    const { book } = this.props;

    const coverStyle = {
      width: book.width,
      height: book.height,
      backgroundImage: `url(${book.image})`
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={coverStyle}>
            </div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="book-title">book title</div>
          <div className="book-authors">book authors</div>

        </div>
      </li>
    );
  }
}
