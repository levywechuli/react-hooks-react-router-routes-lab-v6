import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

test("renders an error page when given a bad URL", () => {
  // Define the test routes
  const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />, // Define the error page here
    },
  ];

  // Create a memory router with an invalid initial entry
  const router = createMemoryRouter(routes, { initialEntries: ["/bad-route"] });

  // Render the RouterProvider with the memory router
  render(<RouterProvider router={router} />);

  // Assert that the error message is displayed
  expect(screen.getByText("Oops! Looks like something went wrong.")).toBeInTheDocument();
});