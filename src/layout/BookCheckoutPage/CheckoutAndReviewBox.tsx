/* eslint-disable jsx-a11y/anchor-is-valid */
import Book from '@models/Book';
import React from 'react';
import { Link } from 'react-router-dom';

type CheckoutAndReviewBoxProps = { book: Book | undefined; mobile: boolean };

const CheckoutAndReviewBox: React.FC<CheckoutAndReviewBoxProps> = ({ book, mobile }) => {
  const bookIsAvailable = book && book.copiesAvailable && book.copiesAvailable > 0;

  return (
    <div className={mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
      <div className="card-body container">
        <div className="mt-3">
          <p>
            <b>0/5 </b>
            books checked out
          </p>
          <hr />
          {bookIsAvailable ? (
            <h4 className="text-success">Available</h4>
          ) : (
            <h4 className="text-danger">Wait List</h4>
          )}

          <div className="row">
            <p className="col-6 lead">
              <b>{book?.copies} </b>
              copies
            </p>
            <p className="col-6 lead">
              <b>{book?.copiesAvailable} </b>
              available
            </p>
          </div>
        </div>
        <Link to="/" className="btn btn-success btn-lg">
          Sign in
        </Link>
        <hr />
        <p className="mt-3">This number can change until placing order has been complete.</p>
        <p>Sign in to ble able to leave a review</p>
      </div>
    </div>
  );
};

export default CheckoutAndReviewBox;
