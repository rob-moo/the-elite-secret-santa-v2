import React from 'react';
import logo from './logo.svg';
import present from './present.svg'
import './App.css';
import GiftClient from './ApiClients/GiftClient';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='Main'>
        <img src={present} className="App-logo" alt="logo" />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
