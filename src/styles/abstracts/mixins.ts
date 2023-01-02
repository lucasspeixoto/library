//Imports
import { css } from 'styled-components';

export const mixins = {
  noSelect: () => css`
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
  `,
};
