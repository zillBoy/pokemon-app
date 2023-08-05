// React Dependencies
import React from "react";
import { ButtonIcon } from "../Button/ButtonIcon";

export type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <div className="py-1 px-2 bg-lighter-gray rounded-2.5xl border border-lightest-gray flex flex-row items-center justify-between">
      <input
        className="bg-lighter-gray py-2 px-4 border-none outline-none text-2.5xl text-darker-gray font-bold w-full"
        type="text"
        {...props}
      />
      <ButtonIcon className="bg-white" icon="/svg/refresh.svg" alt="cross" />
    </div>
  );
};
