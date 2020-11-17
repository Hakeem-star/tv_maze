/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import React, { ReactElement } from "react";
import { headerFont, headerStyle } from "./styles/header";

interface Props {
  styles?: SerializedStyles;
}

export default function Header({ styles }: Props): ReactElement {
  return (
    <header css={[headerStyle, styles]}>
      <p css={headerFont}>TV Bland</p>
    </header>
  );
}
