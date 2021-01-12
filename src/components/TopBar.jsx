import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './Style/TopBar.css'
import {Link} from 'react-router-dom'

function TopBar() {
    return (
        <>
            <Navbar className="Topbar">
                <Navbar.Brand href="#home">
                    <img
                    className="logo__image"
                    alt="Logo"
                    src={require('../Images/logo.png')}
                    />
                </Navbar.Brand>
                
                <Link to="/archetype">
                    <h1>Archetype</h1>
                </Link>
            </Navbar>
        </>
    )
}

export default TopBar;
