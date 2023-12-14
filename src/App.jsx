import React from 'react';
import './App.css'; // Importa el archivo de estilos
import logoPokemon from './images/logo-pokemon.png';
import PokemonList from './components/PokemonList'; 


const App = () => {
  return (
    <div className="app-container">
      <img src={logoPokemon} alt="Logo Pokemon" className="centered-image" />
      <PokemonList />
    </div>
  );
};

export default App;
