// eslint-disable-next-line
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../button/button";

const mockText = "foo";

beforeEach(() => {
  cleanup();
});

test("It should render a <Button /> with the text passed to it", () => {
  render(<Button text={mockText} />);
  const button = screen.getByText(mockText);
  expect(button).toBeInTheDocument();
  expect(button.innerHTML).toContain(mockText);
});

test("It should call the passed function when it's clicked", () => {
  const mockFunction = jest.fn();
  render(<Button text={mockText} onClick={mockFunction} />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

test("It should have a the classes passed as prop", () => {
  const mockClassA = "mockClassA";
  const mockClassB = "mockClassB";
  render(<Button text={mockText} classes={[mockClassA, mockClassB]} />);
  const button = screen.getByRole("button");
  expect(button).toHaveClass(mockClassA);
  expect(button).toHaveClass(mockClassB);
});

test("It should have the base class when no classes are passed", () => {
  const anotherMockClass = "AnotherClass";
  render(<Button text={mockText} />);
  const button = screen.getByRole("button");
  expect(button).toHaveClass("Button");
  expect(button).not.toHaveClass("anotherMockClass");
});
