/* eslint-disable jsx-a11y/anchor-is-valid */
import luv2code from '@assets/images/book-luv2code-1000.png';
import Book from '@models/Book';
import React from 'react';

const SearchBook: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {book.img ? (
              <img src={book.img} width="151" height="233" alt="book" />
            ) : (
              <img src={luv2code} width="151" height="233" alt="book" />
            )}
          </div>
          <div className="d-lg-none d-flex justify-content-center align-items-center">
            {book.img ? (
              <img src={book.img} width="131" height="210" alt="book" />
            ) : (
              <img src={luv2code} width="131" height="210" alt="book" />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{book.author}</h5>
            <h4>{book.title}</h4>
            <p className="card-text">{book.description}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <a className="btn btn-md main-color text-white" href="#">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
