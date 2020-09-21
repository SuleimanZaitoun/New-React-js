import React, {useState} from 'react';
import Normalize from 'react-normalize';

import Header from './components/Header/Header.js'
import CardsHolder from './components/CardsHolder/CardsHolder.js'

import './app.scss'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countryName , setCountrtName] = useState('');
  const ChangeDarkMode = () => setDarkMode(!darkMode);

  function setName (w)
  {
    setCountrtName(w);
  }

  return (
    <>
      <Normalize />
      <Header darkMode={darkMode}
      setDarkMode = {ChangeDarkMode}
      setName = {setName} />
      <CardsHolder darkMode={darkMode}
      setDarkMode = {ChangeDarkMode}
      countryName = {countryName} />
    </>
  );
}

export default App;
