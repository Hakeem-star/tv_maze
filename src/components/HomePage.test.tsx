import React from "react";

import { rest } from "msw";
import { setupServer } from "msw/node";

import { render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Homepage from "./HomePage";

import { BrowserRouter } from "react-router-dom";
import { handlers } from "../mocks/handlers";

const server = setupServer(...handlers);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test("handles server error", async () => {
  server.use(
    rest.get("https://api.tvmaze.com/schedule/?country=bu", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );

  const errorMessage = await waitFor(() =>
    screen.getByText(/Please try again later/i)
  );
  expect(errorMessage).toBeInTheDocument();
});

test("Loads and displays schedule", async () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );

  const sectionHeader = await waitFor(() =>
    screen.getByText(/Last Added Shows/i)
  );
  const goodMorning = await waitFor(() =>
    screen.getByText(/Good Morning Britain/i)
  );
  const savingLives = await waitFor(() =>
    screen.getByText(/Saving Lives at Sea/i)
  );

  expect(sectionHeader).toBeInTheDocument();
  expect(goodMorning).toBeInTheDocument();
  expect(savingLives).toBeInTheDocument();
});
