import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

import './Nav.scss';

function Nav(props) {
    const { darkMode,
        setDarkMode
    } = props;

    return (
        <div className={darkMode? 'mainContainer-dark-mode': 'mainContainer'}>
            <nav className={darkMode? 'nav-dark-mode container': 'nav container'}>
                <h3 className={darkMode? 'nav__header-dark-mode': '.nav__header'}>
                    Where in the world ?
                </h3>
                <div className="nav__Button-div">
                    <FaRegMoon className={darkMode? 'icon-night-dark-mode': 'icon-night'}/>
                    <button
                        onClick={setDarkMode}
                        className={darkMode? 'nav__button-dark-mode': 'nav__button'}
                    >
                        Dark Mode
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Nav
