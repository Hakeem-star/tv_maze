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
            display: flex;
            flex-direction: column;
          `}
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
        </div>
      </div>
    </Router>
  );
}

export default App;
