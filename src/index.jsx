// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';  // Asegúrate de que la ruta sea correcta

const client = new ApolloClient({
  uri: process.env.REACT_APP_POKEAPI_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
