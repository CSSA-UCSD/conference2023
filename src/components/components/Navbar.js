import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../img/logos/Wordmark_Dark.svg";
import Logo from "../../assets/Logo with glow.png";
import LogoNoGlow from "../../assets/Logo without glow.png";
import LogoSVG from "../../assets/conference logo 2022.svg";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                            <Link to="/" className="navbar-brand">
                                <img src={LogoSVG} alt="CSSA @ UCSD Conference Logo" 
                                    onMouseOver={e => e.currentTarget.src=Logo}
                                    onMouseOut={e => e.currentTarget.src=LogoSVG}
                                />
                            </Link>
                        <div className="menu">
                            <ul className="nav">
                                <li className='nav-item'>
                                    <h6>
                                        <Link to='/schedule' className='nav-link'>Schedule</Link>
                                    </h6>
                                </li>
                                <li className='nav-item'>
                                    <h6>
                                        <Link to='/speakers' className='nav-link'>Speakers</Link>
                                    </h6>
                                </li>
                                <li className='nav-item'>
                                    <h6>
                                        <Link to='/register' className='nav-link'>Register</Link>
                                    </h6>
                                </li>
                                <li className='nav-item'>
                                    <h6>
                                        <a href='https://ucsd.zoom.us/j/99955400276' target="_blank" className='nav-link'>Zoom</a>
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;