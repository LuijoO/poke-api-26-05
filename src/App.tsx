import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import Home from './src/home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/pokemon" className="nav-link">Pokemon</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/pokemon/:id" Component={PokemonDetail} />
          <Route path="/pokemon" Component={PokemonList} />
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
