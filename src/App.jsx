import React, {useState, useEffect} from 'react';
import Normalize from 'react-normalize';

import Header from './components/Header/Header.jsx';
import CardsHolder from './components/CardsHolder/CardsHolder.jsx';

import './app.scss';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [countryName, setCountrtName] = useState('');
  const [selectCountry, setSelectCountry] = useState('');

  const changeDarkMode = () => setDarkMode(!darkMode);

  function setName (w) {
    setCountrtName(w);
  }

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
    },[darkMode]);

  function getInitialMode () {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  const setSelect = e => setSelectCountry(e.target.value);

  return (
    <>
      <Normalize />
      <Header
        darkMode={darkMode}
        setDarkMode={changeDarkMode}
        setName={setName}
        setSelect={setSelect}
      />
      <CardsHolder
        darkMode={darkMode}
        setDarkMode={changeDarkMode}
        countryName={countryName}
        selectData={selectCountry}
      />
    </>
  );
}

export default App;
