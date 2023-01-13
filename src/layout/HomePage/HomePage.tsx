import * as React from 'react';

import Carousel from './components/Carousel';
import ExploreTopBooks from './components/ExploreTopBooks';
import Heroes from './components/Heros';
import LibraryServices from './components/LibraryServices';

const HomePage: React.FC = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heroes />
      <LibraryServices />
    </>
  );
};

export default HomePage;
