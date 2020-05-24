import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import resume from './resume.pdf'

import './style.css'

export default class LinksIcon extends Component{
    render(){
        return <ul className='icon-div'>
            <li><a className='linkedIn-icon' href='https://www.linkedin.com/in/phillicia-mitchell-matsuyama21/'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a className='github-icon' href='https://github.com/pmitch242'><FontAwesomeIcon icon={ faGithubSquare } /></a></li>
            <li><a className='resume-icon' href={ resume } ><FontAwesomeIcon icon={faFilePdf} /></a></li>
        </ul>
    }
}