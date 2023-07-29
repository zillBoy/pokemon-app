// External Dependencies
import { render, screen } from "@testing-library/react";

// Internal Dependencies
import Home from "../../src/pages/index";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("Home", () => {
  window.ResizeObserver = ResizeObserver;

  it('displays heading text "Pokemon"', () => {
    render(<Home />);

    const headings = screen.getAllByRole("heading", { name: /pokemon/i });
    expect(headings).toHaveLength(2);
  });
});
