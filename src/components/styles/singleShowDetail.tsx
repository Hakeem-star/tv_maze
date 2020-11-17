import { css } from "@emotion/react";

export const singleShowDetailWrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 var(--gutter);
  padding-top: 40px;
  padding-bottom: 100px;
  @media screen and (min-width: 576px) {
    justify-content: space-between;
    padding-top: 100px;

    & > div {
      width: 48%;
    }
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
  @media screen and (min-width: 576px) {
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
  }

  p:nth-child(2) {
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #8c8c8c;
  }
  @media screen and (min-width: 576px) {
    div {
      ${infoWithBottomBorder}
      p:first-child {
        width: 165px;
      }
    }
  }
`;

export const starringWrapper = css`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 576px) {
    margin-top: 0px;
  }
`;

export const starringWrapper__Content = css`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    height: 65px;
    i {
      width: 65px;
      height: 65px;
      margin-right: 10px;
    }
    div {
      display: flex;
      flex-direction: column;
      p {
        font-family: Arial;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.15000000596046448px;
        text-align: left;
      }
      p:nth-child(2) {
        color: #8c8c8c;
      }
    }
  }
  @media screen and (min-width: 576px) {
    > div {
      ${infoWithBottomBorder}
      flex-basis:80px;
      i {
        width: 58px;
        height: 58px;
        margin-right: 50px;
      }
      > div {
        flex-direction: row;
        p {
          width: 50px;
        }
        p:first-child {
          width: 273px;
        }
      }
    }
  }
`;
