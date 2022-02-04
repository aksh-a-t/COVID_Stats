import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div  className="container-fluid custom">
                    <Link  className="navbar-brand customtext" to="/"><span className="customtext">
                     Covid Stats</span></Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar;
