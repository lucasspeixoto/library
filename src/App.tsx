import HomePage from '@layout/HomePage/HomePage';
import Footer from '@layout/NavbarAndFooter/Footer';
import Navbar from '@layout/NavbarAndFooter/Navbar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <HomePage />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
