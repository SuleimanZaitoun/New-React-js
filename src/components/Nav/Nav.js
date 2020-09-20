import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

import './Nav.scss';

function Nav() {
    return (
        <div className="mainContainer">
            <nav className="nav container">
                <h3 className="nav__header">Where in the world ?</h3>
                <div className="nav__Button-div">
                    <FaRegMoon className="icon-night"/>
                    <button className="nav__button">Dark Mode</button>
                </div>
            </nav>
        </div>
    );
}

export default Nav
