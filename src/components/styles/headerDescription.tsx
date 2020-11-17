import { css } from "@emotion/react";

export const responsiveDescriptionTextStyle = css`
  @media screen and (min-width: 320px) {
    * {
      display: block;
    }
  }
`;

export const headerDescriptionWrapper = css`
  padding: 0 var(--gutter);
  background-color: #ebebeb;
  padding-bottom: 150px;
  @media screen and (min-width: 576px) {
    padding-bottom: 300px;
  }
  > div {
    max-width: 617px;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.3333333432674408px;
    text-align: left;
    color: #8b8b8b;
    @media screen and (min-width: 576px) {
      font-size: 30px;
      line-height: 40px;
      letter-spacing: 0.5px;
    }
  }
`;
