// eslint-disable-next-line
import React from "react";
import { render, screen } from "@testing-library/react";
import VisualLabyrinth from "../visualLabyrinth/visualLabyrinth";

const mockObject = {
  isWall: false,
  isFinish: false,
  isStart: false,
  isPlayerHere: false,
  x: 0,
  y: 0,
};
const mockMatrix = [
  [mockObject, mockObject, mockObject],
  [mockObject, mockObject, mockObject],
];

test("It should render one block for each element in the matrix", () => {
  render(<VisualLabyrinth matrix={mockMatrix} />);
  expect(screen.getAllByTestId(/block/i).length).toBe(6);
});
