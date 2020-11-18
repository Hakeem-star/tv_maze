import { css } from "@emotion/react";
import PersonPlaceholder from "../../assets/PersonPlaceholder.svg";
export const singleShowDetailWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 var(--gutter);
  padding-top: 40px;
  padding-bottom: 100px;
  > div {
    margin-bottom: 40px;
    @media screen and (min-width: 768px) {
      width: 48%;
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding-top: 100px;
    flex-direction: row;
  }
`;

export const headerText = css`
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.33000001311302185px;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  }
`;

export const infoWithBottomBorder = css`
  flex-basis: 100%;
  border-bottom: 1px solid black;
  display: flex;
  height: 80px;
  align-items: center;
  margin-top: 0px;
`;

export const showInfoWrapper = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  > div {
    flex-basis: 50%;
    flex-grow: 1;
    margin-top: 20px;

    > p:nth-of-type(2),
    span p {
      font-family: Arial;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.15000000596046448px;
      text-align: left;
      color: #8c8c8c;
    }
  }
  @media screen and (min-width: 768px) {
    > div {
      ${infoWithBottomBorder}
      >p:first-of-type {
        width: 165px;
      }
      > span {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        align-content: space-around;
        height: 80%;
        p {
          margin-right: 10%;
          font-size: calc(3px + 0.8vw);
        }
        > p:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  @media screen and (min-width: 1440px) {
    div {
      span {
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export const starringWrapper = css`
  display: flex;
  flex-direction: column;
`;
export const starringWrapper__Content__icon = (imageURL: string) => css`
  width: 65px;
  height: 65px;
  margin-right: 10px;
  background: url(${imageURL}) top no-repeat,
    url(${PersonPlaceholder}) center no-repeat;
  border-radius: 999px;
  /* background-position: top; */
  background-size: cover, 20%;
  background-color: var(--placeholderBGColour);
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    width: 58px;
    height: 58px;
    margin-right: 50px;
  }
`;

export const starringWrapper__Content = css`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    height: 65px;
    margin-bottom: 10px;
    div {
      display: flex;
      flex-direction: column;
      flex: 1;

      p {
        font-family: Arial;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.15000000596046448px;
        text-align: left;
      }
      p:nth-of-type(2) {
        color: #8c8c8c;
      }
    }
  }
  @media screen and (min-width: 768px) {
    > div {
      ${infoWithBottomBorder}
      flex-basis:80px;

      > div {
        flex-direction: row;
        p {
          /* width: 50px; */
          margin-right: 30%;
        }
        /* p:first-of-type {
          width: 273px;
        } */
      }
    }
  }
`;
