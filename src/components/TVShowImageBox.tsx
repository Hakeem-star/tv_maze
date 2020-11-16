/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement } from "react";

const tsShowStyle = css`
  width: 140px;
  min-width: 140px;
  min-height: 206.07px;
  height: 206.07px;
  background: red;
`;

interface Props {
  image?: string;
  ratings?: any;
  description?: string;
  size?: string;
}

export default function TVShowImageBox({
  image,
  ratings,
  description,
}: Props): ReactElement {
  return <div css={tsShowStyle}>{}</div>;
}
