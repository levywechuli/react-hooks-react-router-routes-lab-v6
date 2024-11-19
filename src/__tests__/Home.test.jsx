import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

test("renders the Home component on route '/'", () => {
  // Define the routes for the test
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  // Create a memory router with the initial route
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });

  // Render the RouterProvider with the test router
  render(<RouterProvider router={router} />);

  // Assert that the Home page renders correctly
  expect(screen.getByText("Home Page")).toBeInTheDocument();
});
