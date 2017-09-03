import React from 'react';

const BookshelfHeader = (props) => {
  const { hidden, onShelfToggle } = props;
  return (
    <h2 style={{display: 'flex', justifyContent: 'space-between'}} className="bookshelf-title">
      {props.name}
      <i onClick={(e) => {
          e.target.classList.toggle("rotated");
          onShelfToggle();
        }}
        style={{transition: "0.2s ease-in-out"}}
        className={`fa fa-arrow-left ${hidden ? '' : 'rotated'}`}></i>
    </h2>
  );
};

export default BookshelfHeader;
