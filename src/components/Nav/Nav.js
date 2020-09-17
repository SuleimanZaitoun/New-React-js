import React from 'react';
import { FaSistrix , FaRegMoon} from 'react-icons/fa'

import './Nav.scss';

function Nav() {
    return (
        <nav className='nav'>
            <h3 className="nav__header ">Welcome to countries ?</h3>
            <div className="nav__Button-div ">
                <FaRegMoon className="icon-night"/>
                <button className="nav__button ">Dark Mode</button>
            </div>
        </nav>
    );

}

export default Nav