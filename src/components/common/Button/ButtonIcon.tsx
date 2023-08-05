// React & Next Dependencies
import React from "react";
import Image from "next/image";

export type ButtonIconProps = {
  icon: string;
  alt: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonIcon = ({
  icon,
  alt,
  className,
  disabled,
  children,
  ...props
}: ButtonIconProps) => {
  return (
    <button
      className={`flex justify-start items-center p-4 text-base font-bold leading-none text-center text-white transition-all ease-in cursor-pointer bg-lighter-gray disabled:cursor-not-allowed disabled:opacity-70 md:text-lg rounded-2xl sm:w-auto ${
        !disabled && "hover:scale-95 active:scale-90 after:scale-100"
      }  ${className || ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
      <Image src={icon} width={20} height={20} alt={alt} />
    </button>
  );
};
