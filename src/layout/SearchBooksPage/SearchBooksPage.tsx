/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Pagination from '@layout/Utils/components/Pagination';
import Spinner from '@layout/Utils/components/Spinner';
import { categories, Category, filters } from '@layout/Utils/constants/books-filters-options';
import TBook from '@models/Book';
import React, { useEffect, useState } from 'react';

import SearchBook from './components/SearchBook';

const SearchBooksPage: React.FC = () => {
  //! --------------------------------- States ---------------------------------
  const [books, setBooks] = useState<TBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(5);

  const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [searchUrl, setSearchUrl] = useState('');
  const [search, setSearch] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('Book Category');

  //! --------------------------------- Effects ---------------------------------

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

      const responseData = responseJson._embedded.books as TBook[];

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

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  let lastItem =
    booksPerPage * currentPage <= totalAmountOfBooks
      ? booksPerPage * currentPage
      : totalAmountOfBooks;

  //! --------------------------------- Functions ---------------------------------

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const searchHandleChange = () => {
    if (search === '') {
      setSearchUrl('');
    } else {
      setSearchUrl(`/search/findByTitleContaining?title=${search}&page=0&size=${booksPerPage}`);
    }
  };

  const categoriesHandleChange = (category: Category, title: string) => {
    if (categories.includes(category)) {
      setSelectedCategory(title);
      setSearchUrl(`/search/findByCategory?category=${category}&page=0&size=${booksPerPage}`);
    } else {
      setSelectedCategory('All');
      setSearchUrl(`?page=0&size=${booksPerPage}`);
    }
  };

  //! --------------------------------- Components Handler ---------------------------------
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
    <div className="container p-2">
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
                {selectedCategory}
              </button>
              <ul className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                {filters.map((option) => (
                  <li
                    onClick={() => categoriesHandleChange(option.category, option.title)}
                    key={option.index}
                  >
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
  );
};

export default SearchBooksPage;
