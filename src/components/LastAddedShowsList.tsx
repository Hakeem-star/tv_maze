/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement } from "react";

import TVShowImageBox from "./TVShowImageBox";

interface Props {}
const shows = Array(100).fill("");
export default function LastAddedShowsList({}: Props): ReactElement {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, 140px);
        grid-gap: 10px;
        justify-content: start;
        margin-top: 40px;
      `}
    >
      {shows.map(() => (
        <TVShowImageBox />
      ))}
    </div>
  );
}
