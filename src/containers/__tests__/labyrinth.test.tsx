import React from "react";
import { render, screen } from "@testing-library/react";
import Labyrinth from "../labyrinth/labyrinth";

test("Renders layout and initial elements correctly", () => {
    render(<Labyrinth />);
    expect(screen.getByText("Level: 1")).toBeInTheDocument();
    expect(screen.getByTestId("visual-labyrinth")).toBeInTheDocument();
    expect(screen.getByTestId("marker")).toBeInTheDocument()
});
