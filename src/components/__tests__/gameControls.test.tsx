// eslint-disable-next-line
import React from "react";
import { render, screen } from "@testing-library/react";
import GameControls from "../gameControls/gameControls";
import userEvent from "@testing-library/user-event";

const restartGame = jest.fn();
const nextLevel = jest.fn();
const restartLevel = jest.fn();
const mockFunctions = [restartGame, nextLevel, restartLevel];

test("It should render a <GameControls /> with the text passed to it", () => {
    render(<GameControls
        isPlaying={false}
        onNextLevel={nextLevel}
        onRestartGame={restartGame}
        onRestartLevel={restartLevel}
    />)
    const controls = screen.getByTestId("game-controls")
    expect(controls).toBeInTheDocument();
});

test("It should call the passed functions when the buttons are clicked", () => {
    render(<GameControls
        isPlaying={false}
        onNextLevel={nextLevel}
        onRestartGame={restartGame}
        onRestartLevel={restartLevel}
    />)
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3);
    buttons.forEach(button => {
        userEvent.click(button);
    });
    mockFunctions.forEach(func => {
        expect(func).toHaveBeenCalledTimes(1);
    })
})

test("It should not render a <GameControls /> when the player is playing", () => {
    render(<GameControls
        isPlaying={true}
        onNextLevel={nextLevel}
        onRestartGame={restartGame}
        onRestartLevel={restartLevel}
    />)
    const buttons = screen.queryAllByRole("div");
    expect(buttons.length).toBe(0);
});