import React from 'react';
import './style.css';

export default function Navbar() {

    // open navbar
    function openNav(e) {
        e.preventDefault();
        console.log('Open');
    }

    // open navbar
    function closeNav(e) {
        e.preventDefault();
        console.log('Close');
    }

    return (
        <div>
            <div id='mySidenav' className='sidenav'>
                <span onClick={closeNav}>X</span>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Portfolio</h3>
            </div>

            <span onClick={openNav}>Open</span>
        </div>
    )
}


