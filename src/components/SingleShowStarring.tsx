/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { ReactElement } from "react";
import { castResponse } from "../types/castResponse";
import {
  starringWrapper,
  headerText,
  starringWrapper__Content,
  starringWrapper__Content__icon,
} from "./styles/singleShowDetail";

interface Props {
  cast: castResponse | undefined;
}

export default function SingleShowStarring({ cast }: Props): ReactElement {
  //If we don't have any cast members, don't show any results
  if (!cast || (cast && !cast.length)) {
    return <div></div>;
  }

  return (
    <div css={starringWrapper}>
      <p
        css={[
          headerText,
          css`
            margin-bottom: 16px;
          `,
        ]}
      >
        Starring
      </p>
      <div css={starringWrapper__Content}>
        {(cast || Array(4).fill("")).map((castData, index) => {
          const { person, character } = castData || {};
          const { name, image, url } = person || {
            image: { original: "" },
          };
          const { original } = image || "";
          const checkedCharacter = character || {};

          return (
            <div key={name + checkedCharacter + index}>
              <i
                title={name}
                css={starringWrapper__Content__icon(original)}
              ></i>
              <div>
                <a
                  title={name || ""}
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                >
                  <p>{name || ""}</p>
                </a>
                <p>{checkedCharacter.name || null}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
