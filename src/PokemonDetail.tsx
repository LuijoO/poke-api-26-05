import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
}

function PokemonDetail() {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pokemon Detail</h1>
      <h2>{pokemon.name}</h2>
      <h3>{pokemon.id}</h3>
    </div>
  );
}

export default PokemonDetail;
