import React,{useState, useRef} from 'react';
import { FaSistrix } from 'react-icons/fa';

import './Header.scss';

import Nav from '../Nav/Nav.js'

function Header(props) {
    const [countryName , setCountrtName] = useState('');
    const countryy = useRef();

    function checkChange() {
        setCountrtName(countryy.current.value);
        return countryName
    }

    return (
        <div className={props.darkMode? 'main-headerDarkMode' : 'main-header'}>
            <Nav darkMode={props.darkMode}
            setDarkMode = {props.setDarkMode} />
            <header className={props.darkMode? 'main-placeDarkMode container' : 'main-place container'}>
                <div className={props.darkMode? 'main-place__search-divDarkMode' : 'main-place__search-div'}>
                    <FaSistrix className="icon-search"/>
                    <input onChange={() => props.setName(checkChange)} className={props.darkMode? 'main-place__inputDarkMode' : 'main-place__input'} ref={countryy} placeholder="Search for country.."></input>
                </div>
                    <select className={props.darkMode? 'main-place__selectDarkMode' : 'main-place__select'}>
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
