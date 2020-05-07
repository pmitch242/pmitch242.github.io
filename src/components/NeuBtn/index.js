import React from 'react';

import './style.css';

export default function NeuBtn(props) {
    return <a className='neu-btn' href={props.link}><span>{props.name}</span></a>
}


