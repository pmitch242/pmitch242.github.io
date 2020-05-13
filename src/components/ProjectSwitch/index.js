import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


import './style.css'

export default function ProjectSwitch(props) {
    return (
        <ul className={`project-select-ul ${props.large ? '' : 'hide'}`}>
            <li><FontAwesomeIcon icon={faCircle} /></li>
            <li><FontAwesomeIcon icon={faCircle} /></li>
            <li><FontAwesomeIcon icon={faCircle} /></li>
        </ul>
    )
}