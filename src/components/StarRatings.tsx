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

const Stars = ({ rating }: { rating: number }) => {
  //The Api uses a scale of 20 so it needs to be halved
  //and rounded as we only use whole numbers
  const roundedRating = Math.round(rating / 2);
  const stars = Array(5)
    .fill("")
    .map((val, index) => <LightStar key={index} />);

  const darkStars = Array(roundedRating)
    .fill("")
    .map((val, index) => <DarkStar key={index} />);

  stars.splice(0, roundedRating, ...darkStars);

  return <>{stars}</>;
};

export default function StarRatings({
  rating,
  showNumericalRating,
}: Props): ReactElement {
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
        <Stars rating={rating} />
      </div>
      {showNumericalRating ? <p>{rating}/10</p> : null}
    </div>
  );
}
