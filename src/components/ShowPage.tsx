import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showResponse } from "../types/showResponse";
import { getCast, getShows } from "../util/axiosConfig";
import SingleShowDetail from "./SingleShowDetail";
import ShowDetailHero from "./ShowDetailHero";
import { castResponse } from "../types/castResponse";

type ShowState = showResponse;
type CastState = castResponse;

export const ShowContext = React.createContext<ShowState | undefined>(
  undefined
);
export const CastContext = React.createContext<CastState | undefined>(
  undefined
);

export default function ShowPage(): ReactElement {
  const [show, setShow] = useState<ShowState | undefined>();
  const [cast, setCast] = useState<CastState | undefined>();

  const { id }: { id: string } = useParams();

  useEffect(() => {
    let isMounted = true;
    getShows(id).then(
      (response) => {
        isMounted && setShow(response.data);
      },
      (error) => {
        console.error(error.response.data);
        console.error(error);
      }
    );

    getCast(id).then(
      (response) => {
        isMounted && setCast(response.data);
      },
      (error) => {
        console.error(error.response.data);
        console.error(error);
      }
    );

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <ShowContext.Provider value={show}>
        <ShowDetailHero />
        <CastContext.Provider value={cast}>
          <SingleShowDetail />
        </CastContext.Provider>
      </ShowContext.Provider>
    </div>
  );
}
