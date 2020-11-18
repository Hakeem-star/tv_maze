/** @jsxImportSource @emotion/react */
import DOMPurify from "dompurify";
import React, { ReactElement, useMemo } from "react";
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
import getColor from "../util/getColor";
import { HeaderContext } from "../App";
import { useContext } from "react";
import { animateValue } from "../util/animateValue";

interface Props {
  data: showResponse | undefined;
  large?: boolean;
}
const animateValueWrapper = animateValue();

export default function TVShowImageBox({
  data,
  /*The "large" prob lets you use the component in 2 different ways. As a small image component or 
  a large hero component that's intended to take up most of the screen*/
  large = true,
}: Props): ReactElement {
  const { image, name, rating, id: showID, summary } = data || {
    image: { original: "" },
  };

  const { setDominantImageColour } = useContext(HeaderContext) || {};
  return (
    <div css={tVShowImageBoxWrapper(large)}>
      {/* Image */}
      <div css={showImageWrapper(large)}>
        {large ? (
          image?.original ? (
            <img
              crossOrigin="anonymous"
              onMouseEnter={async (e) => {
                const colour = await getColor(image?.original);
                setDominantImageColour &&
                  animateValueWrapper(colour, setDominantImageColour);
              }}
              css={showImageStyle(image?.original, large)}
              src={image?.original}
              alt={name}
            />
          ) : (
            <div css={showImageStyle(image?.original)}></div>
          )
        ) : (
          <Link to={`/${showID}`}>
            {image?.original ? (
              <img
                crossOrigin="anonymous"
                onMouseEnter={async (e) => {
                  const colour = await getColor(image?.original);

                  setDominantImageColour &&
                    animateValueWrapper(colour, setDominantImageColour);
                }}
                css={showImageStyle(image?.original)}
                src={image?.original}
                alt={name}
              />
            ) : (
              <div css={showImageStyle(image?.original)}></div>
            )}
          </Link>
        )}
      </div>
      {/* Details */}
      <div css={tVShowImageBox__details(large)}>
        <div className="ratings" css={ratingsStyle(large)}>
          <StarRatings
            showNumericalRating={large}
            rating={rating?.average || 0}
          />
        </div>
        <p css={tVShowImageBox__details__title(large)}>{name || null} </p>
        {large
          ? summary && (
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
            )
          : null}
      </div>
    </div>
  );
}
