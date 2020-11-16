import React from "react";
import { render, screen } from "@testing-library/react";
import SingleShowDetail from "./SingleShowDetail";

test("Renders main detail for single Show page", () => {
  render(<SingleShowDetail />);
  const mainHeader = screen.getByText(/Show Info/i);
  const starring = screen.getByText(/Starring/i);

  expect(mainHeader).toBeInTheDocument();
  expect(starring).toBeInTheDocument();
});
