import { css } from "@emotion/react";
import ImagePlaceholder from "../../assets/ImagePlaceholder.svg";
export const tVShowImageBoxWrapper = (large: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &:hover {
  }
  @media screen and (min-width: 768px) {
    ${large && `flex-direction: row;`}
  }
`;

export const showImageWrapper = (large: boolean) => css`
  position: relative;
  width: 100%;
  padding-bottom: 125%;
  @media screen and (min-width: 768px) {
    ${large &&
    `
    width: 290px;
    height: 426px;
    flex-shrink: 0;
    padding-bottom: 0;
    transform: translateY(30px);`}
  }
`;

export const showImageStyle = (image: string) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${image}) left no-repeat,
    url(${ImagePlaceholder}) center no-repeat;
  background-size: contain, 20%;
  ${!image && `background-color:var( --placeholderBGColour);`}
`;

export const tVShowImageBox__details = (large: boolean) => css`
  min-width: 290px;
  flex-basis: 70%;
  width: 100%;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    ${large && ` margin-left: 51px;`}
  }
  ${!large && `  min-width: auto; width:100%;`}
`;

export const tVShowImageBox__details__title = (large: boolean) => css`
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.3333333432674408px;
  text-align: left;
  margin-bottom: 10px;
  ${!large &&
  `font-size: 15px;
line-height: 20px;
letter-spacing: 0px;
`}
`;
export const ratingsStyle = (large: boolean) => css`
  max-width: 200px;
  margin: 20px 0;
  ${!large && `width:50%; margin:14px 0;`}

  @media screen and (max-width: 576px) {
    ${!large && `display: none;`}
  }
`;

export const tVShowImageBox__details__description = css`
  font-family: Arial;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  padding-bottom: 47px;
  background: var(--placeholderBGColour);
  width: 100%;
  @media screen and (min-width: 768px) {
    min-height: 200px;
  }
`;
