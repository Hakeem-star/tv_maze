/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement } from "react";

interface Props {}

const responsiveDescriptionTextStyle = css`
  @media screen and (min-width: 360px) {
    * {
      display: block;
    }
  }
`;

export default function HeaderDescription({}: Props): ReactElement {
  return (
    <div>
      <p
        css={css`
          font-family: Arial;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0.3333333432674408px;
          text-align: left;
          color: #8b8b8b;
        `}
      >
        <span css={responsiveDescriptionTextStyle}>
          <p>TV Show and web series database.</p>
          <p>
            Create personalised schedules. Episode guide, cast, crew and
            character information.
          </p>
        </span>
      </p>
    </div>
  );
}
