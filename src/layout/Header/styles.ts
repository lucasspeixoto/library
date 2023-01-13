import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.gradients.header};
`;

export const ToggleContainer = styled.div`
  padding: 0.5rem;
  float: right;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > * {
    color: ${(props) => props.theme.colors.white};
  }
`;
