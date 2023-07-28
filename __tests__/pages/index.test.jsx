// External Dependencies
import { render, screen } from "@testing-library/react";

// Internal Dependencies
import Home from "../../src/pages/index";

describe("Home", () => {
  it('displays heading text "Pokemon"', () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: /pokemon/i });
    expect(heading).toBeInTheDocument();
  });
});
