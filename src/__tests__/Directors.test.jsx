import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Directors from "../pages/Directors";

test("renders the Directors component on route '/directors'", () => {
  // Define the routes for the test
  const routes = [
    {
      path: "/directors",
      element: <Directors />,
    },
  ];

  // Create a memory router with the initial route
  const router = createMemoryRouter(routes, { initialEntries: ["/directors"] });

  // Render the RouterProvider with the test router
  render(<RouterProvider router={router} />);

  // Assert that the Directors page renders correctly
  expect(screen.getByText("Directors Page")).toBeInTheDocument();
});