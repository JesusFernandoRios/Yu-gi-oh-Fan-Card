import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './Style/TopBar.css'

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
                
            </Navbar>
        </>
    )
}

export default TopBar;
