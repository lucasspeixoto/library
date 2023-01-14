import Footer from '@layout/NavbarAndFooter/Footer';
import Navbar from '@layout/NavbarAndFooter/Navbar';
import SearchBooksPage from '@layout/SearchBooksPage/SearchBooksPage';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
