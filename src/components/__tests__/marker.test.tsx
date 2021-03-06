// eslint-disable-next-line
import React from "react";
import { render, screen } from "@testing-library/react";

import Marker from "../marker/marker";
import constants from "../../shared/constants";

test("It should render the loose message when player looses and show the moves received", () => {
  const movesLeft = 0;
  render(<Marker movesLeft={movesLeft} success={false} showResult />);
  expect(screen.getByText(constants.YOU_LOOSE)).toBeInTheDocument();
  expect(screen.getByTestId("moves-left").innerHTML).toContain(
    movesLeft.toString()
  );
});

test("It should show a message when player wins and show the moves left", () => {
  const movesLeft = 2;
  render(<Marker movesLeft={movesLeft} success showResult />);
  expect(screen.getByText(constants.YOU_WIN)).toBeInTheDocument();
  expect(screen.getByTestId("moves-left").innerHTML).toContain(
    movesLeft.toString()
  );
});
