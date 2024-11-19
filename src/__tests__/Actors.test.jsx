import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Actors from "../pages/Actors";

test("renders the Actors component on route '/actors'", () => {
  // Define the routes array with the Actors component route
  const routes = [
    {
      path: "/actors",
      element: <Actors />,
    },
  ];

  // Create the memory router with the defined routes
  const router = createMemoryRouter(routes, { initialEntries: ["/actors"] });

  // Render the RouterProvider with the test router
  render(<RouterProvider router={router} />);

  // Assert that the "Actors Page" is rendered
  expect(screen.getByText("Actors Page")).toBeInTheDocument();
});