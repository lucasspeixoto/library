/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const LibraryServices: React.FC<{}> = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center border shadow-lg">
        <div className="col-lg-7 p-3">
          <h1 className="display-4 fw-bold">Can't find what are you looking for ?</h1>
          <p className="lead">
            If you cannot find what you are looking for, send our library admin's a personal
            message!{' '}
          </p>
          <div className="d-grid gap-2 justify-content-md-strart mb-4 mb-lg-3">
            <a className="btn main-color btn-lg text-white" href="#">
              Sign Up
            </a>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
      </div>
    </div>
  );
};

export default LibraryServices;
