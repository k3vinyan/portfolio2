import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Nav = ({items = ["Home", "Projects", "About", "Contact"], handleScrollTo, navIsVisible, handleNavButton}) => {
    return(
        <div>
            <div className={`nav ${navIsVisible ? 'slideDown' : 'slideUp'}`}>
                <ul className="nav-list">
                    {items.map( item =>
                        <li className="nav-item" key={uuidv4()} onClick={handleScrollTo}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )}
                </ul>
            </div>

            <div className={`container nav nav-button ${navIsVisible ? 'slideUp' : 'slideDown'}`} onClick={handleNavButton}>
                <i className="material-icons">
                    reorder
                </i>
            </div>
        </div>
    )
}

export default Nav
