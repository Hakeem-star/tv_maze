import { css } from "@emotion/react";

export const headerStyle = css`
  width: 100%;
  padding: 27px var(--gutter);
  background-color: #ebebeb;
  @media screen and (min-width: 576px) {
    padding: 90px var(--gutter) 60px;
  }
`;

export const headerFont = css`
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.3333333432674408px;
  text-align: left;
  @media screen and (min-width: 576px) {
    font-size: 30px;
    letter-spacing: 0.5 px;
  }
`;
