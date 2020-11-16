/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Global } from "@emotion/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HeaderDescription from "./components/HeaderDescription";
import LastAddedShows from "./components/LastAddedShowsContainer";
import SingleShowDetail from "./components/SingleShowDetail";
import SingleShowHero from "./components/SingleShowHero";
import globalStyles from "./styles/globalStyles";
import styleReset from "./styles/styleReset";

function App() {
  return (
    <Router>
      <div className="App">
        <Global styles={styleReset} />
        <Global styles={globalStyles} />
        <div
          css={css`
            height: 100vh;
            width: 100%;
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: auto 100%;
          `}
        >
          <Header
            styles={css`
              grid-row: 1/2;
            `}
          >
            <Switch>
              <Route exact path="/">
                <HeaderDescription />
              </Route>
              <Route path="/:name">
                <SingleShowHero />
              </Route>
            </Switch>
          </Header>

          <div
            css={css`
              grid-row: 2/3;
              height: 100%;
              width: 100%;
              padding: 0 var(--gutter);
            `}
          >
            <LastAddedShows />
            <SingleShowDetail />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
