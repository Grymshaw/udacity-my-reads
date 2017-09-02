import React from 'react';

const BookshelfHeader = (props) => {
  return (
    <h2 className="bookshelf-header">
      {props.name}
    </h2>
  );
};

export default BookshelfHeader;
