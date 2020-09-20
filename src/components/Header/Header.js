import React from 'react';
import {FaSistrix} from 'react-icons/fa'

import './Header.scss';
import Nav from '/home/test/Desktop/malikkk/src/components/Nav/Nav.js'

function Header() {
    return (
        <header className="container main-place ">
            <Nav/>
            <div className="main-place__search-div">
                <FaSistrix className="icon-search"/>
                <input className="main-place__input" placeholder="Search for country"></input>
            </div>
            <select className="main-place__select">
                <option value='' disabled selected hidden>Flitter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </header>
    );
}

export default Header;
