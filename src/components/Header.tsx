/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
  styles?: SerializedStyles;
}

export default function Header({ children, styles }: Props): ReactElement {
  return (
    <header
      className="test"
      css={[
        css`
          width: 100%;
          height: 260px;
          padding: 27px var(--gutter);
          background-color: #ebebeb;
        `,
        styles,
      ]}
    >
      <p
        css={css`
          font-family: Arial;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: 0.3333333432674408px;
          text-align: left;
          margin-bottom: 20px;
        `}
      >
        TV Bland
      </p>
      {children}
    </header>
  );
}
