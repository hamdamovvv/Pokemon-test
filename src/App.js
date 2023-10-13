import React from 'react';
import PokemonCard from './PokemonCard';
import styles from './App.css'

const pokemonNames = ['bulbasaur', 'ivysaur', 'venusaur', 'metapod', 'butterfree', 'weedle'];

function App() {
  return (
    <div className="App">
      <div className="back">
          {pokemonNames.map((name) => (
            <PokemonCard key={name} pokemonName={name} />
          ))}
      </div>
    </div>
  );
}

export default App;