import React from 'react';
import $ from "jquery";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


import './style.css'

export default function ProjectSwitch(props) {
    // const scrollingDiv = $('body');
    // const yappeContainer = $('.profile-row');
    // const triviaContainer = $('#desktop-trivia-div');
    // const googleContainer = $('.profile-row');

    const scroll = (dot) => {

        switch (dot) {
            case 'trivia':
                $('html, body').animate({
                    scrollTop: $("#desktop-trivia-div").offset().top
                }, 750);
                break;

            case 'google':
                console.log('google dot was clicked');
                $('html, body').animate({
                    scrollTop: $("#desktop-google-div").offset().top
                }, 750);
                break;

            default:
                console.log('yappe dot was clicked');
                $('html, body').animate({
                    scrollTop: $("#desktop-yappe-div").offset().top
                }, 750);
                break;
        }
    }

    return (
        <ul className={`project-select-ul ${props.large ? '' : 'hide'}`}>
            <li className='dot yappe-dot' onClick={() => scroll('yappe')}>
                <FontAwesomeIcon icon={faCircle} />
            </li>
            <li className='dot trivia-dot' onClick={() => scroll('trivia')}>
                <FontAwesomeIcon icon={faCircle} />
            </li>
            <li className='dot google-dot' onClick={() => scroll('google')}>
                <FontAwesomeIcon icon={faCircle} />
            </li>
        </ul>
    )
}