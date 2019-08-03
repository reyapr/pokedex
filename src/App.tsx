import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      Initialize
    </div>
  );
}

export default App;
