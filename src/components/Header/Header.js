import React from 'react';
import { FaSistrix , FaRegMoon} from 'react-icons/fa'

import Box from '/home/test/Desktop/malikkk/src/components/Card/Card.js'
import './Header.scss';

function Header() {
  return (
    <header className='main-place'>
        <div className="main-place__search-div ">
            <FaSistrix className="icon-search"/>
            <input className="main-place__input" placeholder="Search for country "></input>
        </div>
        <select className="main-place__select" >
            <option value='' disabled selected hidden>Flitter by Region</option>
            <option>Africa</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
        <div className="boxes-Place">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            </div>
    </header>
);
}


export default Header;
