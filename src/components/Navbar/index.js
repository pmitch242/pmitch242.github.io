import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Navbar() {
    // open navbar
    function openNav(e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "100%";

    }

    // open navbar
    function closeNav(e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div>
            <div id='mySidenav' className='sidenav'>
                <span className='closebtn' onClick={closeNav}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
                <a href='/'>Home</a>
                <a href='/profile'>About</a>
                <a href='/portfolio'>Portfolio</a>
            </div>

            <span onClick={openNav}>
                <FontAwesomeIcon icon={faBars}/>
            </span>
        </div>
    )
}


