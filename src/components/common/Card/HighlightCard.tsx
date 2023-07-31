// React  & Next Dependencies
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Internal Dependencies
import { Badge } from "../Badge/Badge";

type HighlightCardProps = {
  name: string;
  image: string;
  colors: {
    darkMuted: string;
    darkVibrant: string;
    lightMuted: string;
    lightVibrant: string;
    muted: string;
    vibrant: string;
  };
  className: string;
};

export const HighlightCard = ({
  name,
  image,
  colors,
  className,
}: HighlightCardProps) => {
  return (
    <div
      style={{ backgroundColor: colors.lightVibrant }}
      className={`relative min-w-75 w-25vw h-28vh rounded-xl ${className}`}
    >
      <img
        className="mx-auto"
        src={image}
        alt={`${name} pokemon`}
        style={{ width: "50%" }}
      />
      <Badge className="absolute bottom-1.5 left-3" text={name} />
    </div>
  );
};
