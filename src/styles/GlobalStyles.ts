import { createGlobalStyle } from 'styled-components';

import Variables from './Variables';

export default createGlobalStyle`

  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  body {
    font-family: var(--font-main);
    margin: 0 auto;
    
    background-color: ${(props) => props.theme.colors.primary};
  }


  body::-webkit-scrollbar {
		width: 10px;
	}

	body::-webkit-scrollbar-thumb {
		background-color: #0e76a8;
		border-radius: 20px;
	}

	body::-webkit-scrollbar-thumb:hover {
		background-color: rgba(14, 118, 168, 0.7);
	}

`;
