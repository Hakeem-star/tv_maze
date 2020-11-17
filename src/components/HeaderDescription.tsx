/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import {
  headerDescriptionWrapper,
  responsiveDescriptionTextStyle,
} from "./styles/headerDescription";

export default function HeaderDescription(): ReactElement {
  return (
    <div css={headerDescriptionWrapper}>
      <div css={responsiveDescriptionTextStyle}>
        <p>TV Show and web series database.</p>
        <p>
          Create personalised schedules. Episode guide, cast, crew and character
          information.
        </p>
      </div>
    </div>
  );
}
