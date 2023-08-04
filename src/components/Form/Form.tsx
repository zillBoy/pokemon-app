// React Dependencies
import React from "react";

// Internal Dependencies
import { ButtonIcon } from "../common/Button/ButtonIcon";

export type FormProps = {
  onHideModal: () => void;
};

export const Form = ({ onHideModal }: FormProps) => {
  return (
    <div className="m-4">
      <div className="flex justify-end">
        <ButtonIcon onClick={onHideModal} icon="/svg/cross.svg" alt="cross" />
      </div>
    </div>
  );
};
