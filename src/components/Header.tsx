/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../App";
import { headerFont, headerStyle } from "./styles/header";

interface Props {
  styles?: SerializedStyles;
}

export default function Header({ styles }: Props): ReactElement {
  const { dominantImageColour } = useContext(HeaderContext) || {};
  let colCheck = dominantImageColour ? dominantImageColour : [128, 128, 128];
  console.log(colCheck);
  return (
    <header css={[headerStyle(colCheck), styles]}>
      <Link to="/">
        <p css={headerFont}>TV Bland</p>
      </Link>
    </header>
  );
}
