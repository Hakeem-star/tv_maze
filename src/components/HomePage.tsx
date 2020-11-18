/** @jsxImportSource @emotion/react */

import Axios from "axios";
import React, { ReactElement, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { scheduleResponse } from "../types/scheduleResponse";
import { getSchedule, getShows } from "../util/axiosConfig";
import HeaderDescription from "./HeaderDescription";
import LastAddedShowsContainer from "./LastAddedShowsContainer";

type State = scheduleResponse;

export const ScheduleContext = React.createContext<State | undefined>(
  undefined
);

export default function Homepage(): ReactElement {
  const [schedule, setSchedule] = useState<State | undefined>();
  useEffect(() => {
    let isMounted = true;

    getSchedule({
      params: {
        country: "GB",
      },
    }).then(
      (response) => {
        isMounted && setSchedule(response.data);
      },
      (error) => {
        setSchedule({ error: error.response.data });
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
      <HeaderDescription />
      <ScheduleContext.Provider value={schedule}>
        <LastAddedShowsContainer />
      </ScheduleContext.Provider>
    </div>
  );
}
