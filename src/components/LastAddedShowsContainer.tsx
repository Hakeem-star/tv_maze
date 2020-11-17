/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import LastAddedShowsList from "./LastAddedShowsList";
import {
  lastAddedShowsContainerh3,
  lastAddedShowsContainerInnerWrapper,
  lastAddedShowsContainerWrapper,
} from "./styles/lastAddedShowsContainer";

export default function LastAddedShowsContainer(): ReactElement {
  return (
    <div css={lastAddedShowsContainerWrapper}>
      <div css={lastAddedShowsContainerInnerWrapper}>
        <h3 css={lastAddedShowsContainerh3}>Last Added Shows</h3>
        <LastAddedShowsList />
      </div>
    </div>
  );
}
