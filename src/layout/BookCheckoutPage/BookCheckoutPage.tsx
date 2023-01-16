import Spinner from '@layout/Utils/components/Spinner';
import Book from '@models/Book';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookCheckoutPage = () => {
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const { bookId } = useParams();

  console.log(bookId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>BookCheckoutPage</h1>
    </div>
  );
};

export default BookCheckoutPage;
