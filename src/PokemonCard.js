import React, { useState, useEffect } from 'react';
import styles from './PokemonCard.css'

const PokemonCard = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [pokemonName]);

  return (
            <div className="pokemon-card">
              {pokemonData && (
                <>
                  <img src={pokemonData.sprites.front_default} alt={pokemonName} />
                  <p>{pokemonName}</p>
                </>
              )}
            </div>
  );
};

export default PokemonCard;