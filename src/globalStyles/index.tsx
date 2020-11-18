import { css } from "@emotion/react";

const globalStyles = css`
  /* variables */
  html {
    --gutter: 15px;
    --placeholderBGColour: #c9c9c9;
    @media screen and (min-width: 576px) {
      --gutter: 100px;
    }
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyles;
