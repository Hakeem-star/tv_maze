import React, { ReactElement } from "react";
import { errorMessageStyle } from "./styles/errorMessage";

export default function ErrorResponse(): ReactElement {
  return (
    <div css={errorMessageStyle}>
      <p>Oh no... Something bad happened</p>
      <br />
      <p>Please try again later</p>
    </div>
  );
}
