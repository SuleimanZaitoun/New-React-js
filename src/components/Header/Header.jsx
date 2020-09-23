import React,{useState, useRef} from 'react';
import { FaSistrix } from 'react-icons/fa';


import './Header.scss';

import Nav from '../Nav/Nav.jsx';

function Header(props) {
    const {
        darkMode,
    } = props;
    const [countryName, setCountrtName] = useState('');
    const countryData = useRef();

    function checkChange() {
        setCountrtName(countryData.current.value);
        return countryName
    }

    return (
        <div className={darkMode? 'main-header-dark-mode': 'main-header'}>
            <Nav
                darkMode={darkMode}
                setDarkMode={props.setDarkMode}
            />
            <header className={darkMode? 'main-place-dark-mode container': 'main-place container'}>
                <div className={darkMode? 'main-place__search-div-dark-mode': 'main-place__search-div'}>
                    <FaSistrix className="icon-search"/>
                    <input
                        onChange={() => props.setName(checkChange)}
                        className={darkMode? 'main-place__input-dark-mode': 'main-place__input'}
                        ref={countryData}
                        placeholder="Search for country..">
                    </input>
                </div>
                    <select
                        onChange={props.setSelect}
                        className={darkMode? 'main-place__select-dark-mode': 'main-place__select'}
                    >
                        <option
                            value=''
                            disabled selected hidden
                        >
                            Flitter by Region
                        </option>
                        <option>
                            Africa
                        </option>
                        <option>
                            America
                        </option>
                        <option>
                            Asia
                        </option>
                        <option>
                            Europe
                        </option>
                        <option>
                            Oceania
                        </option>
                </select>
            </header>
        </div>
    );
}

export default Header;
