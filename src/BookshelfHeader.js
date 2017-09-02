import React from 'react';

const BookshelfHeader = (props) => {
  return (
    <h2 className="bookshelf-title">
      {props.name}
    </h2>
  );
};

export default BookshelfHeader;
