// React  & Next Dependencies
import React from "react";

// Internal Dependencies
import { Badge } from "../Badge/Badge";
import type { PaletteColors } from "react-palette";

type HighlightCardProps = {
  name: string;
  image: string;
  colors: PaletteColors;
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
      className={`relative min-w-75 w-25vw h-28vh rounded-xl ${className} select-none`}
    >
      <img
        className="mx-auto user-image-no-select"
        src={image}
        alt={`${name} pokemon`}
        style={{ width: "50%" }}
        draggable="false"
      />
      <Badge className="absolute bottom-1.5 left-3" text={name} />
    </div>
  );
};
