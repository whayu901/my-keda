import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "./About";

describe("About Component", () => {
  it("renders the component correctly", () => {
    render(<About />);

    const heading = screen.getByText("About Us");

    expect(heading).toBeInTheDocument();
  });
});
