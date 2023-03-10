import BookCheckoutPage from '@layout/BookCheckoutPage/BookCheckoutPage';
import HomePage from '@layout/HomePage/HomePage';
import SearchBooksPage from '@layout/SearchBooksPage/SearchBooksPage';
import React from 'react';
import { Redirect, Route, Routes } from 'react-router-dom';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Redirect to="home" replace />} />
    <Route path="home" element={<HomePage />} />
    <Route path="search" element={<SearchBooksPage />} />
    <Route path="checkout/:bookId" element={<BookCheckoutPage />} />
    <Route path="*" element={<Redirect to="home" replace />} />
  </Routes>
);
