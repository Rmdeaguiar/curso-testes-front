import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test the App component", () => {
  test("Should have two titles in the page", async () => {
    render(<App />);

    const title = await screen.findAllByRole('heading');
    expect(title).toHaveLength(2);
  });

  test("Should have a title 'Hello World'", async () => {
    render(<App />);

    const title = await screen.findByRole('heading', {
      name: "Hello World"
    });
    expect(title).toBeInTheDocument();
  });
});