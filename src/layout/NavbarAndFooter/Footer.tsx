/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="main-color fixed-bottom">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
        <p className="col-md-4 mb-0 text-white">@ Example Library App, Inc</p>
        <ul className="nav navbar-dark col-md-4 justify-content-end">
          <li className="nav-item">
            <a className="nav-link px-2 text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-white" href="#">
              Search Books
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
