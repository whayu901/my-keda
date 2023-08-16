import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extended DOM assertions
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the component correctly", () => {
    render(<Hero />);

    // Check if the image with alt attribute is present
    const image = screen.getByAltText("data");
    expect(image).toBeInTheDocument();

    // Check if the SVG element is present
    const svgElement = screen.getByTestId("svg-element");
    expect(svgElement).toBeInTheDocument();
  });
});
