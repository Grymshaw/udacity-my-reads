import * as BooksAPI from './BooksAPI';
import React, { Component } from 'react';

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
      console.log(book);
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
        height: 230
      };
    }

    return (
      !isLoading ? <div>
        <div>Book details page</div>
        <div>
          <div style={imgStyle}></div>
          <div>{book.title}</div>
          {book.subtitle ? <div>{book.subtitle}</div> : ''}
          <div>Rating: {book.averageRating} ({book.ratingsCount} reviews)</div>
          <div>{book.pageCount} pages</div>
          <div>{book.authors}</div>
          <div>{book.description}</div>
        </div>
        <span onClick={history.goBack}>Go back</span>
      </div>
      :
        <div>Loading...</div>
    );
  }
}
