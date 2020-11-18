/** @jsxImportSource @emotion/react */

import React, { ReactElement, useContext } from "react";
import ErrorResponse from "./ErrorResponse";
import { ShowContext } from "./ShowPage";
import { ShowDetailHeroWrapper } from "./styles/showDetailHero";
import TVShowImageBox from "./TVShowImageBox";

export default function ShowDetailHero(): ReactElement {
  const show = useContext(ShowContext);

  if (!show) {
    return <div>Loading...</div>;
  }

  if (show && "error" in show) {
    return <ErrorResponse />;
  }
  return (
    <div css={ShowDetailHeroWrapper}>
      <div>
        <TVShowImageBox data={show} large />
      </div>
    </div>
  );
}
