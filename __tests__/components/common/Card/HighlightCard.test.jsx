// External Dependencies
import { render, screen } from "@testing-library/react";

// Internal Dependencies
import { HighlightCard } from "@/components/common/Card/HighlightCard";

describe("HightlightCard", () => {
  const pokemon = {
    id: "charizard-id",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    name: "Charizard",
    colors: {
      lightVibrant: "red",
    },
  };

  it("display highlight card image, name", () => {
    render(
      <HighlightCard
        name={pokemon.name}
        image={pokemon.image}
        colors={pokemon.colors.lightVibrant}
      />
    );

    const name = screen.getByText(/charizard/i);
    const image = screen.getByRole("img", { name: /charizard pokemon/i });

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
