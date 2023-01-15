import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

export const SpinnerCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--main);
  border-right: 2px solid var(--main);
  border-bottom: 2px solid var(--main);
  border-left: 4px solid var(--main);
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
