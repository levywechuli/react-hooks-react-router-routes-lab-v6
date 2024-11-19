import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Movie from "../pages/Movie";

test("renders the Movie component on route '/movie/:id'", () => {
  // Define the routes for the test
  const routes = [
    {
      path: "/movie/:id",
      element: <Movie />,
    },
  ];

  // Create a memory router with the initial entry for the route
  const router = createMemoryRouter(routes, {
    initialEntries: ["/movie/1"], // Simulate visiting /movie/1
  });

  // Render the RouterProvider with the test router
  render(<RouterProvider router={router} />);

  // Assert that the Movie component renders correctly
  expect(screen.getByText(/Movie Title/i)).toBeInTheDocument();
});