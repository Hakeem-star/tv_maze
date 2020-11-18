/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import { showResponse } from "../types/showResponse";
import { headerText, showInfoWrapper } from "./styles/singleShowDetail";

interface Props {
  show: showResponse | undefined;
}

export default function SingleShowShowInfo({ show }: Props): ReactElement {
  const { schedule, status, genres, network } = show || {};

  return (
    <div className="SingleShowDetail-showinfo">
      <p css={[headerText]}>Show Info</p>
      <div css={showInfoWrapper}>
        <div>
          <p>Streamed on</p>
          <p>{network && network.name}</p>
        </div>
        <div>
          <p>Schedule</p>
          <span>
            {schedule && schedule.days.map((day) => <p key={day}>{day}</p>)}
          </span>
        </div>
        <div>
          <p>Status</p>
          <p>{status}</p>
        </div>
        <div>
          <p>Genres</p>
          <p>
            <span>
              {genres?.map((genre) => (
                <p key={genre}>{genre}</p>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
