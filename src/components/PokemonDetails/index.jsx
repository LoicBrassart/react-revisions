import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({ data }) => {
      setPokemon(data);
    });
  }, []);

  return (
    <>
      {pokemon.id && (
        <>
          <h1>{pokemon.name}</h1>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </>
      )}
    </>
  );
}
