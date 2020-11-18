import { css } from "@emotion/react";

export const lastAddedShowsContainerWrapper = css`
  @media screen and (min-width: 576px) {
    margin-bottom: -150px;
  }
`;

export const lastAddedShowsContainerInnerWrapper = css`
  padding: 0 var(--gutter);
  padding-top: 40px;
`;

export const lastAddedShowsContainerh3 = css`
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.33000001311302185px;
  text-align: left;
  @media screen and (min-width: 576px) {
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.5 px;
  }
`;
