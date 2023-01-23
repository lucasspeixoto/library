/* eslint-disable react/jsx-no-undef */
import { oktaConfig } from '@config/okta/oktaConfig';
import LoginWidget from '@layout/Auth/LoginWidget';
import BookCheckoutPage from '@layout/BookCheckoutPage/BookCheckoutPage';
import HomePage from '@layout/HomePage/HomePage';
import Footer from '@layout/NavbarAndFooter/Footer';
import Navbar from '@layout/NavbarAndFooter/Navbar';
import SearchBooksPage from '@layout/SearchBooksPage/SearchBooksPage';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import { LayoutContainer, RoutesContainer } from '@styles/wrappers';
import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';

const oktaAuth = new OktaAuth(oktaConfig);

const App: React.FC = () => {
  const { theme } = useTheme();

  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <GlobalStyles />
        <Security
          oktaAuth={oktaAuth}
          restoreOriginalUri={restoreOriginalUri}
          onAuthRequired={customAuthHandler}
        >
          <Navbar />
          <RoutesContainer>
            {/* <Routes /> */}
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/search">
                <SearchBooksPage />
              </Route>

              <Route path="/checkout/:bookId">
                <BookCheckoutPage />
              </Route>
              <Route path="/login" render={() => <LoginWidget config={oktaConfig} />} />
              <Route path="/login/callback" component={LoginCallback} />
            </Switch>
          </RoutesContainer>
          <Footer />
        </Security>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default App;
