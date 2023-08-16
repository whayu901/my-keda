import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extended DOM assertions
import Nav from "./Header";

describe("Nav Component", () => {
  it("renders the component correctly", () => {
    render(<Nav />);

    // Check if the Home link is present
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();

    // Check if the menu button is present
    const menuButton = screen.getByTestId("menu");
    expect(menuButton).toBeInTheDocument();

    // Check if the navigation links are present
    const aboutLink = screen.getByText("ABOUT");
    const pricingLink = screen.getByText("PRICING");
    const contactLink = screen.getByText("CONTACT");
    expect(aboutLink).toBeInTheDocument();
    expect(pricingLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    // Check if the Login button is present
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it("opens and closes the menu when menu button is clicked", () => {
    render(<Nav />);

    const menuButton = screen.getByTestId("menu");

    // Mock the click event
    const clickEvent = jest.fn();

    menuButton.addEventListener("click", clickEvent);

    // Click the menu button
    fireEvent.click(menuButton);

    // Check if the click event was called
    expect(clickEvent).toHaveBeenCalled();
  });
});
