import React, { Component } from 'react';

import * as BooksAPI from './BooksAPI';
import './BookDetails.css';

export default class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      isLoading: true
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    BooksAPI.get(id).then(book => {
      this.setState({
        book,
        isLoading: false
      });
    });
  }

  render() {
    const { book, isLoading } = this.state;
    const { history } = this.props;

    let imgStyle;
    if(!isLoading) {
      imgStyle = {
        backgroundImage: `url(${book.imageLinks.thumbnail})`,
        backgroundSize: "cover",
        width: 180,
        height: 250,
        margin: "0 auto"
      };
    }

    return (
      <div className="details-wrapper">
        <div className="book-details-title">
          <a className="close-search" onClick={history.goBack}>Go back</a>
          <h1>Book Details</h1>
        </div>

        <div className="details-content">
          {isLoading ?
            <div className="loading">Loading...</div>
          :
            <div className="details">
              <div className="details__image">
                <div style={imgStyle}></div>
              </div>
              <div className="details__text">
                <div className="details__title">
                  <h2>
                    <span className="details__title-text">{book.title}</span>
                    {book.averageRating
                      ? <span className="details__rating">{book.averageRating} <i className="fa fa-star-o"></i> ({book.ratingsCount} reviews)</span>
                      : ''
                    }
                  </h2>
                </div>
                {book.subtitle
                  ? <div className="details__subtitle">{book.subtitle}</div>
                  : ''
                }
                <div className="details__authors">by {book.authors.join(', ')}</div>
                <div className="details__year">Published {book.publishedDate}</div>
                <div className="details__page-count">({book.pageCount} pages)</div>
              </div>
              <div className="details__description">{book.description}</div>
            </div>
          }
        </div>

      </div>
    );
  }
}
