import React, { ReactElement } from "react";
import SingleShowDetail from "./SingleShowDetail";
import SingleShowHero from "./SingleShowHero";

interface Props {}

export default function ShowPage({}: Props): ReactElement {
  return (
    <div>
      <SingleShowHero />
      <SingleShowDetail />
    </div>
  );
}
