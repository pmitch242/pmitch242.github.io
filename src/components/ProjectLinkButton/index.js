import React from 'react';

import './style.css'

export default function ProjectLinkButton(props) {
    return (
        <a href={props.links} className='neu-button-white'><span>{props.children}</span></a>
    )
}