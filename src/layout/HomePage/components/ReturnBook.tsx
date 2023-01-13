/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import luv2code from '@assets/images/book-luv2code-1000.png';
import Book from '@models/Book';
import React from 'react';

const ReturnBook: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {book.img ? (
          <img src={book.img} width="151" height="233" alt="book" />
        ) : (
          <img src={luv2code} width="151" height="233" alt="book" />
        )}
        <h6 className="mt-2">{book.title}</h6>
        <p>{book.author}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};

export default ReturnBook;
