import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // fina an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox interactions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click checkbox
  fireEvent.click(checkbox);

  // check that button is disabled
  expect(colorButton).toBeDisabled();

  // check that checkbox is checked
  expect(checkbox).toBeChecked();

  // click checkbox again
  fireEvent.click(checkbox);

  // check that button in enabled again
  expect(colorButton).toBeEnabled();

  // check that checkbox is unchecked again
  expect(checkbox).not.toBeChecked();
});

test("button is disabled when color is red", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click checkbox
  fireEvent.click(checkbox);

  // check that button is disabled and button is gray
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // check that checkbox is checked
  expect(checkbox).toBeChecked();

  // click checkbox again
  fireEvent.click(checkbox);

  // check that button background color is red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button is disabled when color is blue", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click button
  fireEvent.click(colorButton);

  // click checkbox
  fireEvent.click(checkbox);

  // check that button is disabled and button is gray
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // click checkbox again
  fireEvent.click(checkbox);

  // check that button is enabled and background is blue
  expect(colorButton).not.toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
