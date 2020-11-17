/** @jsxImportSource @emotion/react */

import React, { ReactElement } from "react";
import { ShowDetailHeroWrapper } from "./styles/showDetailHero";
import TVShowImageBox from "./TVShowImageBox";

interface Props {}

export default function ShowDetailHero({}: Props): ReactElement {
  return (
    <div css={ShowDetailHeroWrapper}>
      <div>
        <TVShowImageBox large />
      </div>
    </div>
  );
}
