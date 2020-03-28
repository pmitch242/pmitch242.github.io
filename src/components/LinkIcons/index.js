import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen as faEnvelopeOpenRegular, faFile } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default class LinksIcon extends Component{
    render(){
        return <ul className='icon-div'>
            <li><FontAwesomeIcon icon={ faEnvelopeOpenRegular } /></li>
            <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
            <li><FontAwesomeIcon icon={faFile} /></li>
            <li><FontAwesomeIcon icon={faGithub} /></li>
        </ul>
    }
}