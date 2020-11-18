/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement } from "react";
import { scheduleResponse } from "../types/scheduleResponse";
import ErrorResponse from "./ErrorResponse";
import { errorMessageStyle } from "./styles/errorMessage";
import { lastAddedShowsListStyle } from "./styles/lastAddedShowsList";

import TVShowImageBox from "./TVShowImageBox";

interface Props {
  schedule: scheduleResponse | undefined;
}
export default function LastAddedShowsList({ schedule }: Props): ReactElement {
  if (!schedule) {
    return <div>Loading...</div>;
  }

  if (schedule && "error" in schedule) {
    console.log({ schedule });
    return <ErrorResponse />;
  }

  return (
    <div css={lastAddedShowsListStyle}>
      {schedule.map((val, index) => (
        <TVShowImageBox data={val.show} large={false} key={index} />
      ))}
    </div>
  );
}
