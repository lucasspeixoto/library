import { useContext } from 'react';

import { IThemeContext, ThemeContext } from '../contexts/ThemeContext';

export function useTheme(): IThemeContext {
  const contextData = useContext(ThemeContext);

  return contextData;
}
