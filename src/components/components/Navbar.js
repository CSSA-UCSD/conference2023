import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo2023.png";
import LogoSVG from "../../assets/logo2023SVG.svg";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <div className="menu">
                            <ul className="nav">
                                <li className='nav-item'>
                                    <h6>
                                        <Link to='/schedule' className='nav-link'>Home</Link>
                                    </h6>
                                </li>

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
                                        <a href='https://ucsd.zoom.us/j/99955400276' target="_blank" rel="noreferrer" className='nav-link'>Zoom</a>
                                    </h6>
                                </li>
                            </ul>
                        </div>
                            <h6 id="">
                                <Link to='/register' className='nav-link' id="register"><span>Register</span></Link>
                            </h6>
                            {/* <Link to="/" className="navbar-brand">
                                <img src={LogoSVG} alt="CSSA @ UCSD Conference Logo" 
                                    onMouseOver={e => e.currentTarget.src=Logo}
                                    onMouseOut={e => e.currentTarget.src=LogoSVG}
                                />
                            </Link> */}                        
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;