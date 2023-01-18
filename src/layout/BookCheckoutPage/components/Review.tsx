import StarsReview from '@layout/Utils/components/StarsReview';
import TReview from '@models/Review';
import * as React from 'react';

const Review: React.FC<{ review: TReview }> = ({ review }) => {
  const date = new Date(review.date);

  const month = date.toLocaleString('en-us', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  const formatedDate = `${month} ${day}, ${year}`;

  return (
    <div className="col-sm-8 col-md-8">
      <h5>{review.userEmail}</h5>
      <div className="row">
        <div className="col">{formatedDate}</div>
        <div className="col">
          <StarsReview rating={review.rating} size={16} />
        </div>
      </div>
      <div className="mt-2">
        <p>{review.reviewDescription}</p>
      </div>
    </div>
  );
};

export default Review;
