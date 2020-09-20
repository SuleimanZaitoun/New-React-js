import React from 'react';
import { FaSistrix } from 'react-icons/fa';

import './Header.scss';

import Nav from '../Nav/Nav.js'

function Header() {
    return (
        <div>
            <Nav />
            <header className="container main-place ">
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
        </div>
    );
}

export default Header;
