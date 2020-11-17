/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement } from "react";
import {
  singleShowDetailWrapper,
  headerText,
  showInfoWrapper,
  starringWrapper,
  starringWrapper__Content,
} from "./styles/singleShowDetail";

interface Props {}

export default function SingleShowDetail({}: Props): ReactElement {
  return (
    <div css={singleShowDetailWrapper}>
      <div className="SingleShowDetail-showinfo">
        <p css={[headerText]}>Show Info</p>
        <div css={showInfoWrapper}>
          <div>
            <p>Streamed on</p>
            <p>BBC Three</p>
          </div>
          <div>
            <p>Schedule</p>
            <p>Tuesdays</p>
          </div>
          <div>
            <p>Status</p>
            <p>Running</p>
          </div>
          <div>
            <p>Genres</p>
            <p>Drama, Comedy, Music</p>
          </div>
        </div>
      </div>
      <div css={starringWrapper}>
        <p
          css={[
            headerText,
            css`
              margin-bottom: 16px;
            `,
          ]}
        >
          Starring
        </p>
        <div css={starringWrapper__Content}>
          <div>
            <i></i>
            <div>
              <p>Victoria Alcock</p>
              <p>Carol</p>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <p>Hugo Chegwin</p>
              <p>Beats</p>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <p>Allan Mustafa</p>
              <p>Grindah</p>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <p>Daniel Sylvester Woolford</p>
              <p>Decoy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
