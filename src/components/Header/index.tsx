import { Toggle } from '@comp/Toggle';
import { useTheme } from '@hooks/useTheme';
import React, { useState } from 'react';

import { Container, ToggleContainer } from './styles';
import { LogoContainer } from './styles';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false,
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <header>
      <Container>
        <ToggleContainer>
          <Toggle checked={darkTheme} onChange={handleChangeTheme} />
        </ToggleContainer>
        <LogoContainer>
          <h1>Library</h1>
        </LogoContainer>
      </Container>
    </header>
  );
};

export default Header;
