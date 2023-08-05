// External Dependencies
import { render, screen } from "@testing-library/react";

// Internal Dependencies
import { Input } from "../../../../src/components/common/Input/Input";
import { setup } from "../../../../src/utils/utils";

describe("Input", () => {
  it("checks native input onChange event is working fine", async () => {
    const { user } = setup(<Input aria-label="input" />);

    const input = screen.getByLabelText("input");
    await user.clear(input);
    await user.type(input, "Charizard");

    expect(input).toHaveValue("Charizard");
  });
});
