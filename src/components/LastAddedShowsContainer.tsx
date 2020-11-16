/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement } from "react";
import LastAddedShowsList from "./LastAddedShowsList";

interface Props {}

export default function LastAddedShowsContainer({}: Props): ReactElement {
  return (
    <div
      css={css`
        padding-top: 40px;
      `}
    >
      <h3
        css={css`
          font-family: Arial;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.33000001311302185px;
          text-align: left;
        `}
      >
        Last Added Shows
      </h3>
      <LastAddedShowsList />
    </div>
  );
}
