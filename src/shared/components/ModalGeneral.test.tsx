import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For better assertion messages
import ModalGeneral from "./ModalGeneral"; // Update the import path accordingly

test("renders modal with message when isOpen is true", () => {
  const onClose = jest.fn();
  const message = "This is a test message";
  const isOpen = true;

  render(<ModalGeneral isOpen={isOpen} onClose={onClose} message={message} />);

  // Check if modal is rendered with the provided message
  expect(screen.getByText("Pop Up")).toBeInTheDocument();
  expect(screen.getByText(message)).toBeInTheDocument();

  // Click the "Tutup" button
  const closeButton = screen.getByText("Tutup");
  fireEvent.click(closeButton);

  // Check if the onClose function is called
  expect(onClose).toHaveBeenCalled();
});

test("does not render modal when isOpen is false", () => {
  const onClose = jest.fn();
  const message = "This is a test message";
  const isOpen = false;

  render(<ModalGeneral isOpen={isOpen} onClose={onClose} message={message} />);

  // Check if the modal is not in the document
  expect(screen.queryByText("Pop Up")).not.toBeInTheDocument();
  expect(screen.queryByText(message)).not.toBeInTheDocument();
});
