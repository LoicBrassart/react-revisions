import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonCard from '../PokemonCard';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(({ data }) => {
        const cleanPoks = data.results.map((dirtyPok) => {
          const id = dirtyPok.url.split('/')[6];
          return {
            id,
            name: dirtyPok.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };
        });
        setPokemons(cleanPoks);
      });
  }, []);

  return (
    <>
      <h1>Gotta catch em all !!</h1>
      {pokemons.map((pokemon) => {
        return <PokemonCard {...pokemon} />;
      })}
    </>
  );
}
