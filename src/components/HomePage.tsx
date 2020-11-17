/** @jsxImportSource @emotion/react */

import React, { ReactElement } from "react";
import HeaderDescription from "./HeaderDescription";
import LastAddedShowsContainer from "./LastAddedShowsContainer";

interface Props {}

export default function Homepage({}: Props): ReactElement {
  return (
    <div>
      <HeaderDescription />
      <LastAddedShowsContainer />
    </div>
  );
}
