/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const ReturnBook: React.FC<{ src: string; courseTitle: string }> = ({ src, courseTitle }) => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="text-center">
          <img src={src} width="151" height="233" alt="book" />
          <h6 className="mt-2">{courseTitle}</h6>
          <p>Luv2Code</p>
          <a className="btn main-color text-white" href="#">
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReturnBook;
