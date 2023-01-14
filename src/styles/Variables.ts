import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --main: #0e76a8;

    --white: #fff;
    --black: #000;
    --gray: #7f7f7f;
    --blue: #0e76a8;

    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;
