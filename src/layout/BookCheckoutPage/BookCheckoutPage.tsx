/* eslint-disable no-unused-vars */
import luv2code from '@assets/images/book-luv2code-1000.png';
import Spinner from '@layout/Utils/components/Spinner';
import StarsReview from '@layout/Utils/components/StarsReview';
import TBook from '@models/Book';
import Review from '@models/Review';
import { BASE_URL } from '@utils/request';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CheckoutAndReviewBox from './CheckoutAndReviewBox';
import LatestReviews from './LatestReviews';

const BookCheckoutPage = () => {
  //! Book State
  const [book, setBook] = useState<TBook>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const { bookId } = useParams();

  //! Review State
  const [reviews, setReviews] = useState<Review[]>([]);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(true);

  /**
   * @function getBookTotalStarsHandler
   * @description Function that will receive the
   * collection of reviews and calculate the total average rating
   * @param {Review[]} reviews
   * @returns {number}
   */
  const getBookTotalStarsHandler = (reviews: Review[]): number => {
    return reviews.length > 0
      ? reviews.map((review) => review.rating).reduce((first, second) => first + second) /
          reviews.length
      : 0;
  };

  /**
   * ? FetchBookReviews and Starts useEffect
   */
  useEffect(() => {
    const fetchBookReviews = async () => {
      const baseUrl = `${BASE_URL}/reviews/search/findByBookId?bookId=${bookId}`;

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.reviews;

      const reviews: Review[] = [...responseData];

      setReviews(reviews);

      if (reviews) {
        const totalStars = getBookTotalStarsHandler(reviews);

        setTotalStars(totalStars);
      }

      setIsLoadingReviews(false);
    };

    fetchBookReviews().catch((error) => {
      setIsLoadingReviews(false);
      setHttpError(error.message);
    });
  }, []);

  /**
   * ? FetchBooks useEffect
   */
  useEffect(() => {
    const fetchBook = async () => {
      const baseUrl: string = `${BASE_URL}/books/${bookId}`;

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJson = await response.json();

      const loadedBook: TBook = {
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

  if (isLoading || isLoadingReviews) {
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
      <div className="container d-none d-xxl-block">
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
              <StarsReview rating={totalStars} size={32} />
            </div>
          </div>
          <CheckoutAndReviewBox book={book} mobile={false} />
          <hr />
          <LatestReviews reviews={reviews} bookId={book?.id} mobile={false} />
        </div>
      </div>
      <div className="container d-xxl-none mt-5">
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
            <StarsReview rating={totalStars} size={24} />
          </div>
        </div>
        <CheckoutAndReviewBox book={book} mobile={true} />
        <hr />
        <LatestReviews reviews={reviews} bookId={book?.id} mobile={true} />
      </div>
    </React.Fragment>
  );
};

export default BookCheckoutPage;
