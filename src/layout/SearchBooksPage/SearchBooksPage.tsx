/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Pagination from '@layout/Utils/components/Pagination';
import SpinnerLoading from '@layout/Utils/components/SpinnerLoading';
import { filters } from '@layout/Utils/constants/books-filters-options';
import Book from '@models/Book';
import React, { useEffect, useState } from 'react';

import SearchBook from './components/SearchBook';

const SearchBooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [booksPerPage, setBooksPerPage] = useState(5);

  const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [searchUrl, setSearchUrl] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';

      let url;

      if (searchUrl === '') {
        url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
      } else {
        url = baseUrl + searchUrl;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.books as Book[];

      setTotalAmountOfBooks(responseJson.page.totalElements);
      setTotalPages(responseJson.page.totalPages);
      setBooks(responseData);
      setIsLoading(false);
    };

    fetchBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    window.scrollTo(0, 0);
  }, [currentPage, searchUrl]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  // eslint-disable-next-line no-unused-vars
  let lastItem =
    booksPerPage * currentPage <= totalAmountOfBooks
      ? booksPerPage * currentPage
      : totalAmountOfBooks;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const searchHandleChange = () => {
    if (search === '') {
      setSearchUrl('');
    } else {
      setSearchUrl(`/search/findByTitleContaining?title=${search}&page=0&size=${booksPerPage}`);
    }
  };

  return (
    <div className="container">
      <div>
        <div className="row mt-5">
          <div className="col-12 col-md-8">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-labelledby="Search"
                onChange={(value) => setSearch(value.target.value)}
              />
              <button className="btn btn-outline-success" onClick={() => searchHandleChange()}>
                Search
              </button>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="d-flex mt-2 mt-md-0 justify-content-end">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                  {filters.map((option) => (
                    <li key={option.index}>
                      <a className={option.className} href="#">
                        {option.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {totalAmountOfBooks > 0 ? (
          <>
            <div className="mt-3">
              <h5>Number of results: ({totalAmountOfBooks})</h5>
            </div>
            <p>
              {' '}
              {indexOfFirstBook + 1} to {indexOfLastBook} of {totalAmountOfBooks} items:
            </p>

            {books.map((book) => (
              <SearchBook book={book} key={book.id} />
            ))}

            {totalPages > 1 ? (
              <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <div className="d-flex align-items-center flex-column mt-5">
            <h3>Can't find what you are looking for ?</h3>
            <a
              type="button"
              href="#"
              className="btn main-color btn-md px-4 me-md-2 fw-bold text-white"
            >
              Library Services
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBooksPage;
