import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        height
        weight
        experience
      }
    }
  }
`;

const PokemonList = () => {
  const limit = 10;
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { limit, offset: 0 },
  });

  const handleLoadMore = () => {
    fetchMore({
      variables: { offset: data.pokemons.results.length },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons = data.pokemons.results;

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          {/* Renderiza los detalles del Pokémon aquí */}
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Experience: {pokemon.experience}</p>
        </div>
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default PokemonList;
