/* eslint-disable jsx-a11y/anchor-is-valid */
import TReview from '@models/Review';
import * as React from 'react';
import { Link } from 'react-router-dom';

import Review from './components/Review';

type LatestReviewsProps = {
  reviews: TReview[];
  bookId: number | undefined;
  mobile: boolean;
};

const LatestReviews: React.FC<LatestReviewsProps> = ({ reviews, bookId, mobile }) => {
  const hasReviews = reviews.length > 0;
  return (
    <div className={mobile ? 'mt-3' : 'row mt-5'}>
      <div className={mobile ? '' : 'col-sm-2 col-md-2'}>
        <h2>Latest Reviews</h2>
      </div>
      <div className="col-sm-10 col-md-10">
        {hasReviews ? (
          <>
            {reviews.slice(0, 3).map((review) => (
              <Review review={review} key={review.id}></Review>
            ))}

            <hr className="w-100" />

            <div className="mt-3 mb-3">
              <Link
                type="button"
                className="btn btn-md main-color text-white"
                to={`/reviewlist/${bookId}`}
              >
                Reach all reviews.
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-3">
            <p className="lead">Currently there are no reviews for this book</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestReviews;
