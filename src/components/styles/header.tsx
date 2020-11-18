import { css } from "@emotion/react";

export const headerStyle = (dominantColour: number[]) => css`
  width: 100%;
  padding: 27px var(--gutter);
  background-color: #ebebeb;
  margin-bottom: -400px;
  background: rgb(240, 240, 240);
  background: ${`linear-gradient(
    81deg,
    rgba(240, 240, 240, 1) 0%,
    rgba(224, 224, 224, 1) 24%,
    rgba(208, 208, 208, 1) 45%,
    rgba(192, 192, 192, 1) 66%,
   rgba(${dominantColour.join(",")}, 1) 100%
  );`};
  transition: background-colour 1s;
  a:link,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
  min-height: 480px;
  @media screen and (min-width: 576px) {
    min-height: 580px;
    margin-bottom: -400px;
    padding: 90px var(--gutter);
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
