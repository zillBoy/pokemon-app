// React  & Next Dependencies
import React from "react";
import Image from "next/image";

// Internal Dependencies
import StarIcon from "@public/svg/start.svg";

type BadgeProps = {
  text: string;
  className: string;
};

export const Badge = ({ text, className }: BadgeProps) => {
  return (
    <div
      className={`flex items-center gap-1 px-3 py-1 mb-2 bg-white rounded-lg  ${className}`}
    >
      <Image src={StarIcon} width={20} height={20} alt="start" />
      <p className="font-semibold font-primary text-dark-gray">{text}</p>
    </div>
  );
};
