import React from 'react';

import './style.css'

export default function ProjectLinkButton(props) {
    return (
        <a href={`${props.link}`} className='neu-button-white'><span>{props.text}</span></a>
    )
}