/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement } from "react";
import { ReactComponent as DarkStar } from "../assets/DarkStar.svg";
import { ReactComponent as LightStar } from "../assets/LightStar.svg";
import { starRatingsWrapper } from "./styles/starRatings";

interface Props {
  rating: number;
  showNumericalRating: boolean;
}

export default function StarRatings({
  rating,
  showNumericalRating,
}: Props): ReactElement {
  const stars = Array(5).fill(<LightStar />);
  stars.splice(0, rating, Array(rating).fill(<DarkStar />));
  return (
    <div css={starRatingsWrapper}>
      <div
        css={css`
          display: flex;
          margin-right: 10px;
          width: 100%;
          svg {
            flex: 1;
          }
        `}
      >
        {stars}
      </div>
      {showNumericalRating ? <p>{rating}/5</p> : null}
    </div>
  );
}
