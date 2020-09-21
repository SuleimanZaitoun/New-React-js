import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

import './Nav.scss';

function Nav(props) {
    return (
        <div className={props.darkMode? 'mainContainerDarkMode' : 'mainContainer'}>
            <nav className={props.darkMode? 'navDarkMode container' : 'nav container'}>
                <h3 className={props.darkMode? 'nav__headerDarkMode' : '.nav__header'}>Where in the world ?</h3>
                <div className="nav__Button-div">
                    <FaRegMoon className={props.darkMode? 'icon-nightDarkMode' : 'icon-night'}/>
                    <button onClick={props.setDarkMode} className={props.darkMode? 'nav__buttonDarkMode' : 'nav__button'}>Dark Mode</button>
                </div>
            </nav>
        </div>
    );
}

export default Nav
