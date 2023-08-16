import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extended DOM assertions
import Pricing from "./Pricing";

describe("Pricing Component", () => {
  it("renders the component correctly", () => {
    render(<Pricing />);

    // Check if the title is present
    const title = screen.getByText("Pilih Tier Yang Ingin Anda Gunakan");
    expect(title).toBeInTheDocument();

    // Check if the pricing tiers are rendered correctly
    const tierNames = ["Basic", "Business", "Enterpreneur"]; // Modify with actual tier names
    tierNames.forEach((tierName) => {
      const tier = screen.getByText(tierName);
      expect(tier).toBeInTheDocument();
    });

    // Check if the pricing values are present
    const pricingValues = ["40.000", "12.000", "30.000"]; // Modify with actual pricing values
    pricingValues.forEach((pricingValue) => {
      const pricing = screen.getByText(pricingValue);
      expect(pricing).toBeInTheDocument();
    });

    // Check if the "Pilih Paket" buttons are present
    const buttons = screen.getAllByText("Pilih Paket");
    expect(buttons.length).toBe(tierNames.length);
  });
});
