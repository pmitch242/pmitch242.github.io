import React, { Component } from 'react';
import resume from './resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen as faEnvelopeOpenRegular, faFile } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default class LinksIcon extends Component{
    render(){
        return <ul className='icon-div'>
            <li><a href='mailto:phill.mitchell211@gmail.com'><FontAwesomeIcon icon={ faEnvelopeOpenRegular } /></a></li>
            <li><a href='https://www.linkedin.com/in/phillicia-mitchell-matsuyama21/'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a href={ resume } target="_blank"><FontAwesomeIcon icon={faFile} /></a></li>
            <li><a href='https://github.com/pmitch242'><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
    }
}