// eslint-disable-next-line
import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../layout/layout";

test("Renders layout and children correctly", () => {
  render(<Layout>Children</Layout>);
  expect(screen.getByText("Children")).toBeInTheDocument();
});
