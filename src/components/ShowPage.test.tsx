import React from "react";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import ShowPage from "./ShowPage";

import mockShowResponse from "../mocks/mockShowResponse.json";
import mockCastResponse from "../mocks/mockCastResponse.json";

import { BrowserRouter } from "react-router-dom";
import { handlers } from "../mocks/handlers";

const server = setupServer(...handlers);

// establish API mocking before all tests
beforeAll(() => {
  server.listen();
});

// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => {
  server.resetHandlers();
});
// clean up once the tests are done
afterAll(() => {
  server.close();
});

// test("handles server error", async () => {
//   server.use(
//     rest.get("https://api.tvmaze.com/shows", (req, res, ctx) => {
//       return res(ctx.status(500));
//     })
//   );

//   render(
//     <BrowserRouter>
//       <ShowPage />
//     </BrowserRouter>
//   );

//   const errorMessage = await screen.findAllByText(/Please try again later/i);

//   expect(errorMessage).toHaveLength(2);
// });

test("Loads and displays show details", async () => {
  render(
    <BrowserRouter>
      <ShowPage />
    </BrowserRouter>
  );

  const goodMorning = await waitFor(() =>
    screen.getByText(/BBC's Breakfast team/i)
  );
  const starName = await waitFor(() => screen.getByText(/Dan Walker/i));
  const itv = await waitFor(() => screen.getByText(/BBC One/i));

  expect(goodMorning).toBeInTheDocument();
  expect(starName).toBeInTheDocument();
  expect(itv).toBeInTheDocument();
});
