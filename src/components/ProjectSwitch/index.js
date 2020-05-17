import React, { useState } from 'react';
import $ from "jquery";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPaw, faGamepad, faBookOpen } from '@fortawesome/free-solid-svg-icons';



import './style.css'

export default function ProjectSwitch(props) {
    const [select, setSelect] = useState('yappe')
    // const scrollingDiv = $('body');
    // const yappeContainer = $('.profile-row');
    // const triviaContainer = $('#desktop-trivia-div');
    // const googleContainer = $('.profile-row');

    const scroll = (dot) => {

        switch (dot) {
            case 'trivia':
                setSelect('trivia');
                $('html, body').animate({
                    scrollTop: $("#desktop-trivia-div").offset().top
                }, 750);
                break;

            case 'google':
                setSelect('google');
                $('html, body').animate({
                    scrollTop: $("#desktop-google-div").offset().top
                }, 750);
                break;

            default:
                setSelect('yappe');
                $('html, body').animate({
                    scrollTop: $("#desktop-yappe-div").offset().top
                }, 750);
                break;
        }
    }

    return (
        <ul className={`project-select-ul ${props.large ? '' : 'hide'}`}>
            <li className='yappe-li'
                onClick={() => {
                    scroll('yappe');
                    props.action('yappe');
                }}>
                {select !== 'yappe' &&
                    <FontAwesomeIcon className='yappe-dot' icon={faCircle} />}
                {select === 'yappe' &&
                    <FontAwesomeIcon className='active-icon-switch' icon={faPaw} />}
            </li>
            <li className='trivia-li'
                onClick={() => {
                    scroll('trivia');
                    props.action('trivia');
                }}>
                {select !== 'trivia' &&
                    <FontAwesomeIcon className='trivia-dot' icon={faCircle} />}

                {select === 'trivia' &&
                    <FontAwesomeIcon className='active-icon-switch' icon={faGamepad} />}
            </li>
            <li className='google-li'
                onClick={() => {
                    scroll('google');
                    props.action('google');
                }}>

                {select !== 'google' &&
                    <FontAwesomeIcon className='google-dot' icon={faCircle} />}

                {select === 'google' &&
                    <FontAwesomeIcon className='active-icon-switch' icon={faBookOpen} />}
            </li>
        </ul>
    )
}