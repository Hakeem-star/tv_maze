/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { ReactElement } from "react";
import TVShowImageBox from "./TVShowImageBox";

interface Props {}

export default function ShowDetailHero({}: Props): ReactElement {
  return (
    <div
      css={css`
        height: 100%;
        width: 100%;
        background-color: #ebebeb;
      `}
    >
      <TVShowImageBox />
    </div>
  );
}
