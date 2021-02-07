import React from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from './MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MovieList />
    </div>
  );
}

export default App;
