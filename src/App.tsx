/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Global } from "@emotion/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import globalStyles from "./globalStyles";
import styleReset from "./globalStyles/styleReset";
import ShowPage from "./components/ShowPage";
import { useState } from "react";

type state = undefined | number[];

interface headerType {
  dominantImageColour: state;
  setDominantImageColour: React.Dispatch<React.SetStateAction<any | undefined>>;
}

export const HeaderContext = React.createContext<headerType | undefined>(
  undefined
);

function App() {
  const [dominantImageColour, setDominantImageColour] = useState<state>();

  return (
    <Router>
      <div className="App">
        <Global styles={styleReset} />
        <Global styles={globalStyles} />
        <div
          css={css`
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
          `}
        >
          <HeaderContext.Provider
            value={{ dominantImageColour, setDominantImageColour }}
          >
            <Header
              styles={css`
                grid-row: 1/2;
              `}
            />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/:id">
                <ShowPage />
              </Route>
            </Switch>
          </HeaderContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
