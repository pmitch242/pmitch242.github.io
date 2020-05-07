import React from 'react';

import './style.css';

export default function NeuBtn(props) {
    return <a className='neu-btn' href={props.link}><span className={props.hover}>{props.name}</span></a>
}


