// External Dependencies
import { render, screen } from "@testing-library/react";

// Internal Dependencies
import { ButtonIcon } from "../../../../src/components/common/Button/ButtonIcon";
import { setup } from "../../../../src/utils/utils";

describe("ButtonIcon", () => {
  it('checks button native events like "onClick" is working', async () => {
    const onClickMock = jest.fn();
    const { user } = setup(
      <ButtonIcon icon="/svg/cross.svg" alt="cross" onClick={onClickMock} />
    );

    const btn = screen.getByRole("button");
    await user.click(btn);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("does not trigger onClick when the button is disabled", async () => {
    const onClickMock = jest.fn();
    const { user } = setup(
      <ButtonIcon
        icon="/svg/cross.svg"
        alt="cross"
        onClick={onClickMock}
        disabled
      />
    );

    const btn = screen.getByRole("button");
    await user.click(btn);

    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
