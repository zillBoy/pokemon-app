// React Dependencies
import React, { LegacyRef, forwardRef } from "react";
import { ButtonIcon } from "../Button/ButtonIcon";

export type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function Input(
  { children, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <div className="relative z-40 overflow-hidden">
      <div className="relative z-20 py-1 px-2 bg-lighter-gray rounded-2.5xl border border-lightest-gray flex flex-row items-center justify-between">
        <input
          ref={ref}
          className="z-10 bg-lighter-gray py-2 px-4 border-none outline-none text-2.5xl text-darker-gray font-bold w-full"
          type="text"
          {...props}
        />
        <ButtonIcon className="bg-white" icon="/svg/refresh.svg" alt="cross" />
      </div>
      {children}
    </div>
  );
});
