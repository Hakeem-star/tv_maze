/** @jsxImportSource @emotion/react */
import React, { ReactElement, useContext } from "react";
import ErrorResponse from "./ErrorResponse";
import { CastContext, ShowContext } from "./ShowPage";
import SingleShowShowInfo from "./SingleShowShowInfo";
import SingleShowStarring from "./SingleShowStarring";
import { singleShowDetailWrapper } from "./styles/singleShowDetail";

export default function SingleShowDetail(): ReactElement {
  const show = useContext(ShowContext);
  const cast = useContext(CastContext);

  if ((show && "error" in show) || (cast && "error" in cast)) {
    return <ErrorResponse />;
  }

  return (
    <div css={singleShowDetailWrapper}>
      <SingleShowShowInfo show={show} />
      <SingleShowStarring cast={cast} />
    </div>
  );
}
