/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import StarRatings from "./StarRatings";
import {
  tVShowImageBoxWrapper,
  showImageWrapper,
  showImageStyle,
  tVShowImageBox__details,
  ratingsStyle,
  tVShowImageBox__details__title,
  tVShowImageBox__details__description,
} from "./styles/tVShowImageBox";

interface Props {
  image?: string;
  ratings?: any;
  description?: string;
  large?: boolean;
}

export default function TVShowImageBox({
  image,
  ratings,
  description,
  /*The "large" prob lets you use the component in 2 different ways. As a small image component or 
  a large hero component that's intended to take up most of the screen*/
  large = true,
}: Props): ReactElement {
  return (
    <div css={tVShowImageBoxWrapper(large)}>
      <div css={showImageWrapper(large)}>
        <div css={[showImageStyle]}></div>
      </div>
      <div css={tVShowImageBox__details(large)}>
        <div className="ratings" css={ratingsStyle(large)}>
          <StarRatings showNumericalRating={large} rating={4} />
        </div>
        <p css={tVShowImageBox__details__title(large)}>
          This is the title of the TV show which is very long isn't it
        </p>
        {large ? (
          <p css={tVShowImageBox__details__description}>
            Hinc ille commotus ut iniusta perferens et indigna praefecti
            custodiam protectoribus mandaverat fidis. quo conperto Montius tunc
            quaestor acer quidem sed ad lenitatem propensior, consulens in
            commune.
          </p>
        ) : null}
      </div>
    </div>
  );
}
