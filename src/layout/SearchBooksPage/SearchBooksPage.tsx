import SpinnerLoading from '@layout/Utils/SpinnerLoading';
import Book from '@models/Book';
import React, { useEffect, useState } from 'react';

import SearchBook from './components/SearchBook';

const SearchBooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';

      const url = `${baseUrl}?page=0&size=5`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.books as Book[];

      setBooks(responseData);
      setIsLoading(false);
    };

    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

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
              />
              <button className="btn btn-outline-success">Search</button>
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
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdowm-item" href="$">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdowm-item" href="$">
                      Front End
                    </a>
                  </li>
                  <li>
                    <a className="dropdowm-item" href="$">
                      Back End
                    </a>
                  </li>
                  <li>
                    <a className="dropdowm-item" href="$">
                      Data
                    </a>
                  </li>
                  <li>
                    <a className="dropdowm-item" href="$">
                      DevOps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h5>Number of results: (22)</h5>
        </div>
        <p> 1 to 5 of 22 items:</p>

        {books.map((book) => (
          <SearchBook book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchBooksPage;
