// eslint-disable-next-line
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Block from "../block/block";

beforeEach(() => {
  cleanup();
});

test("Has the Disabled class when receives isWall prop as true", () => {
  render(<Block isWall />);
  expect(screen.getByTestId("block")).toMatchInlineSnapshot(`
    <div
      class="Block Disabled"
      data-testid="block"
    />
  `);
});

test("Has the Finish class when receives isFinish prop as true", () => {
  render(<Block isFinish />);
  expect(screen.getByTestId("block")).toMatchInlineSnapshot(`
    <div
      class="Block Finish"
      data-testid="block"
    />
  `);
});
test("Has the Start class when receives isStart prop as true", () => {
  render(<Block isStart />);
  expect(screen.getByTestId("block")).toMatchInlineSnapshot(`
    <div
      class="Block Start"
      data-testid="block"
    />
  `);
});

test("It shows the Player class when receives isPlayerHere prop as true", () => {
  render(<Block isPlayerHere />);
  expect(screen.queryByTestId("player")).toMatchInlineSnapshot(`
    <div
      class="Player"
      data-testid="player"
    />
  `);
});

test("It doesnt show the Player class when receives isPlayerHere prop as false", () => {
  render(<Block />);
  const player = screen.queryByTestId("player");
  expect(player).toBeNull();
});
