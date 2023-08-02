// External Dependencies
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Internal Dependencies
import { Button } from "../../../../src/components/common/Button/Button";
import { setup } from "../../../utils/utils";

describe("Button", () => {
  it("display correct text in button", () => {
    render(<Button text="Hello World" variant="contained" />);

    const btn = screen.getByRole("button", { name: /hello world/i });
    expect(btn).toHaveTextContent("Hello World");
  });

  it("has correct native button events", async () => {
    const onClickMock = jest.fn();
    const { user } = setup(
      <Button text="Hello World" variant="contained" onClick={onClickMock} />
    );

    const btn = screen.getByRole("button", { name: /hello world/i });
    await user.click(btn);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("display correct styles for based on variant", () => {
    render(<Button text="Click Me" variant="outline" />);

    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toHaveClass("border-darker-gray");
  });
});
