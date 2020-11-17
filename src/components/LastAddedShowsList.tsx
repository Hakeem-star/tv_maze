/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import { lastAddedShowsListStyle } from "./styles/lastAddedShowsList";

import TVShowImageBox from "./TVShowImageBox";

interface Props {}
export default function LastAddedShowsList({}: Props): ReactElement {
  const shows = Array(100).fill("");
  return (
    <div css={lastAddedShowsListStyle}>
      {shows.map((val, index) => (
        <TVShowImageBox large={false} key={index} />
      ))}
    </div>
  );
}
