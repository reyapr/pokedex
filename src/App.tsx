import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Pokedex from './components/pages/Pokedex';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './config/store'
import { Provider } from 'react-redux'
import PokemonDetail from './components/pages/PokemonDetail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Route component={Pokedex} exact path="/" />
          <Route component={PokemonDetail} exact path="/pokemon/:pokemonId" />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
