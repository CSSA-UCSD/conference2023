import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo2023.png";
import LogoSVG from "../../assets/logo2023SVG.svg";

const Tab = ({tab, onClick, currTab, zoom}) => {
    return <li className='nav-item'>
        <h6>
        { zoom
            ? <a href={zoom} target="_blank" rel="noreferrer" className='nav-link'>{tab}</a>
            : <Link to={`/${tab}`} className='nav-link' onClick={() => onClick(tab)}>
                <span className={tab === currTab ? 'underline' : ''}>
                    {tab === '' ? 'home' : tab}
                </span>
            </Link>
        }
        </h6>
    </li>
};

const Navbar = () => {
    const [currTab, setCurrTab] = useState(useLocation().pathname.split('/')?.[1]);

    const changeTab = (label) => {
        setCurrTab(label)
    }

    return (
        <nav className="navbar mt-4">
            <div className="container">
                <div className="menu">
                    <ul className="nav">
                        <Tab tab='' onClick={changeTab} currTab={currTab}/>
                        <Tab tab="schedule" onClick={changeTab} currTab={currTab}/>
                        <Tab tab="speakers" onClick={changeTab} currTab={currTab}/>
                        <Tab tab="zoom" onClick={changeTab} currTab={currTab} zoom="https://ucsd.zoom.us/j/99955400276" />
                    </ul>
                </div>
                <h6 id="register">
                    <Link to='/register' className='nav-link'><span>Register</span></Link>
                </h6>
                {/* <Link to="/" className="navbar-brand">
                    <img src={LogoSVG} alt="CSSA @ UCSD Conference Logo" 
                        onMouseOver={e => e.currentTarget.src=Logo}
                        onMouseOut={e => e.currentTarget.src=LogoSVG}
                    />
                </Link> */}
            </div>
        </nav>
    )
}

export default Navbar;