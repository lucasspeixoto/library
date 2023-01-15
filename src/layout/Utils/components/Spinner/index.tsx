import React from 'react';

import { SpinnerCircle, SpinnerContainer } from './styles';

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  );
};
export default Spinner;
