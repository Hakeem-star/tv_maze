/** @jsxImportSource @emotion/react */
import React, { ReactElement, useContext } from "react";
import { ScheduleContext } from "./HomePage";
import LastAddedShowsList from "./LastAddedShowsList";
import {
  lastAddedShowsContainerh3,
  lastAddedShowsContainerInnerWrapper,
  lastAddedShowsContainerWrapper,
} from "./styles/lastAddedShowsContainer";

export default function LastAddedShowsContainer(): ReactElement {
  const schedule = useContext(ScheduleContext);
  return (
    <div css={lastAddedShowsContainerWrapper}>
      <div css={lastAddedShowsContainerInnerWrapper}>
        <h3 css={lastAddedShowsContainerh3}>Last Added Shows</h3>
        <LastAddedShowsList schedule={schedule} />
      </div>
    </div>
  );
}
