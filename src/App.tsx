import Carousel from '@comp/layout/HomePage/Carousel';
import ExploreTopBooks from '@comp/layout/HomePage/ExploreTopBooks';
import Heroes from '@comp/layout/HomePage/Heros';
import Navbar from '@comp/layout/NavbarAndFooter/Navbar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const { theme } = useTheme();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <ExploreTopBooks />
        <Carousel />
        <Heroes />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
