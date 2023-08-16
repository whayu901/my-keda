import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extended DOM assertions
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the component correctly", () => {
    render(<Footer />);

    const heartEmoji = screen.getByText("❤️");
    const createdByLink = screen.getByText("Cahyono Wahyu Setiawan");
    const tailwindCssLink = screen.getByText("Tailwind CSS");

    expect(heartEmoji).toBeInTheDocument();
    expect(createdByLink).toBeInTheDocument();
    expect(tailwindCssLink).toBeInTheDocument();
  });
});
