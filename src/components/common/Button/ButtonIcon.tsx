// React & Next Dependencies
import React from "react";
import Image from "next/image";

export type ButtonIconProps = {
  icon: string;
  alt: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonIcon = ({ icon, alt, ...props }: ButtonIconProps) => {
  return (
    <button
      className="inline-block w-full h-full p-4 text-base font-bold leading-none text-center text-white transition-all ease-in cursor-pointer bg-lighter-gray disabled:cursor-not-allowed disabled:opacity-70 md:text-lg rounded-2xl sm:w-auto hover:scale-95 active:scale-85 after:scale-100"
      {...props}
    >
      <Image src={icon} width={20} height={20} alt={alt} />
    </button>
  );
};
