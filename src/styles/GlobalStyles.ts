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

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);

    :hover {
      color: var(--blue)
    }
    
  }

  .link {
    position: relative;

    :hover::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--blue);
      transition: var(--transition);
    }
    
  }

  body::-webkit-scrollbar {
		width: 15px;
	}

	body::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.secondary};
		border-radius: 20px;
	}

	body::-webkit-scrollbar-thumb:hover {
		background-color: ${(props) => props.theme.colors.grey};
	}

`;
