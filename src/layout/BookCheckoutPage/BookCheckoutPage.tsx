import luv2code from '@assets/images/book-luv2code-1000.png';
import Spinner from '@layout/Utils/components/Spinner';
import StarsReview from '@layout/Utils/components/StarsReview';
import Book from '@models/Book';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CheckoutAndReviewBox from './CheckoutAndReviewBox';

const BookCheckoutPage = () => {
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const { bookId } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJson = await response.json();

      const loadedBook: Book = {
        ...responseJson,
      };

      setBook(loadedBook);

      setIsLoading(false);
    };

    fetchBook().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="container d-none d-lg-block">
        <div className="row mt-5 g-1">
          <div className="col-sm-2 col-md-2">
            {book?.img ? (
              <img src={book.img} width="226" height="349" alt="book" />
            ) : (
              <img src={luv2code} width="226" height="349" alt="book" />
            )}
          </div>
          <div className="col-4 col-md-4 container">
            <div className="ml-2">
              <h2>{book?.title}</h2>
              <h5 className="text-primary">{book?.author}</h5>
              <p className="lead">{book?.description}</p>
              <StarsReview rating={4.8} size={32} />
            </div>
          </div>
          <CheckoutAndReviewBox book={book} mobile={false} />
          <hr />
        </div>
      </div>
      <div className="container d-lg-none mt-5">
        <div className="d-flex justify-content-center align-items-center">
          {book?.img ? (
            <img src={book.img} width="226" height="349" alt="book" />
          ) : (
            <img src={luv2code} width="226" height="349" alt="book" />
          )}
        </div>
        <div className="mt-4">
          <div className="ml-2">
            <h2>{book?.title}</h2>
            <h5 className="text-primary">{book?.author}</h5>
            <p className="lead">{book?.description}</p>
            <StarsReview rating={4.8} size={24} />
          </div>
        </div>
        <CheckoutAndReviewBox book={book} mobile={true} />
        <hr />
      </div>
    </React.Fragment>
  );
};

export default BookCheckoutPage;
