// React Dependencies
import React from "react";

const variants = {
  contained:
    "flex items-center justify-center block w-full h-full px-10 py-4 text-base font-bold leading-none text-center text-white cursor-pointer bg-darker-gray disabled:cursor-not-allowed disabled:opacity-70 md:text-lg rounded-xl sm:w-auto",
  outline:
    "flex items-center justify-center block w-full h-full px-6 py-3 text-base font-bold leading-none text-center border-2 cursor-pointer text-darker-gray border-darker-gray disabled:cursor-not-allowed disabled:opacity-70 rounded-xl md:py-4 md:px-6 sm:ml-4 sm:w-auto",
  text: "",
};

export type ButtonProps = {
  text: string;
  variant: "contained" | "outline" | "text";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, variant, ...props }: ButtonProps) => {
  return (
    <button type="button" className={variants[variant]} {...props}>
      <span>{text}</span>
    </button>
  );
};
