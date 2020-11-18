/** @jsxImportSource @emotion/react */
import DOMPurify from "dompurify";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { showResponse } from "../types/showResponse";
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
import { css } from "@emotion/react";
interface Props {
  data: showResponse | undefined;
  large?: boolean;
}

export default function TVShowImageBox({
  data,
  /*The "large" prob lets you use the component in 2 different ways. As a small image component or 
  a large hero component that's intended to take up most of the screen*/
  large = true,
}: Props): ReactElement {
  const { image, name, rating, id: showID, summary } = data || {
    image: { original: "" },
  };
  return (
    <div css={tVShowImageBoxWrapper(large)}>
      <div css={showImageWrapper(large)}>
        {large ? (
          <div css={showImageStyle(image?.original)}></div>
        ) : (
          <Link to={`/${showID}`}>
            <div css={showImageStyle(image?.original)}></div>
          </Link>
        )}
      </div>
      <div css={tVShowImageBox__details(large)}>
        <div className="ratings" css={ratingsStyle(large)}>
          <StarRatings
            showNumericalRating={large}
            rating={rating?.average || 0}
          />
        </div>
        <p css={tVShowImageBox__details__title(large)}>{name || null} </p>
        {large ? (
          summary ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(summary),
              }}
              css={[
                tVShowImageBox__details__description,
                css`
                  background: none;
                  > p {
                    margin: 1em 0;
                  }
                `,
              ]}
            ></div>
          ) : (
            <div css={tVShowImageBox__details__description}></div>
          )
        ) : null}
      </div>
    </div>
  );
}
