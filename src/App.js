import React from 'react';
import Normalize from 'react-normalize';

import Header from './components/Header/Header'
import CardsHolder from './components/CardsHolder/CardsHolder.js'

import './app.scss'

function App() {
  return (
    <>
      <Normalize />
      <Header />
      <CardsHolder />
    </>
  );
}

export default App;
