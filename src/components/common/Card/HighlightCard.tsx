// React  & Next Dependencies
import React from "react";
import Image from "next/image";

// Internal Dependencies
import { Badge } from "../Badge/Badge";

type HighlightCardProps = {
  name: string;
  image: string;
};

export const HighlightCard = ({ name, image }: HighlightCardProps) => {
  return (
    // className="backdrop-blur-sm bg-white/30"
    <div className="relative bg-red-400 w-75 h-50 rounded-xl">
      <Image
        className="mx-auto"
        src={image}
        width={160}
        height={160}
        alt={`${name} pokemon`}
      />
      <Badge className="absolute bottom-1.5 left-3" text={name} />
    </div>
  );
};
