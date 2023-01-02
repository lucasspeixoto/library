import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      grey: string;

      success: string;
      info: string;
      warning: string;

      balance: string;
      entries: string;
      outflows: string;
      generic: string;
      recurring: string;
      eventual: string;

      thead: string;
    };

    gradients: {
      header: string;
    };
  }
}
