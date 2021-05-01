import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Speech from './components/Speech';

function App() {
  return (
    <div className="App">
      <Header />
      <div>Welcome to Filmbase</div>
      <Speech />
    </div>
  );
}

export default App;
