import React from 'react';
import $ from "jquery";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


import './style.css'

export default function ProjectSwitch(props) {


    return (
        <ul className={`project-select-ul ${props.large ? '' : 'hide'}`}>
            <li className='dot yappeDot'><FontAwesomeIcon icon={faCircle} /></li>
            <li className='dot triviaDot'><FontAwesomeIcon icon={faCircle} /></li>
            <li className='dot googleDot'><FontAwesomeIcon icon={faCircle} /></li>
        </ul>
    )
}