import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Pokedex from './components/pages/Pokedex';
import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Route component={Pokedex} route="/" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
