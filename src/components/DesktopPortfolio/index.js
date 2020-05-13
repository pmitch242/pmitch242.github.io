import React from 'react';

import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
// faPaw, faGamepad, faBookOpen

import yappeDesktopImage from './images/yappe-desktop.png';
import yappeMobileImage from './images/yappe-mobile.png';
// import triviaDesktopImage from './images/trivia-desktop.PNG';
// import triviaMobileImage from './images/trivia-mobile.png';
// import googleDesktopImage from './images/google-desktop.PNG';

import './style.css';

export default function DesktopPortfolio(props) {
    return (
        <div
            style={{ height: '100vh', paddingTop: '7vh' }}
            className={`${props.large ? '' : 'desktop-portfolio-small'}`}
        >
            <Card className='desktop-portfolio'>
                <Card.Body>
                    <div className='project-header-div'>
                        <h5 className='desktop-project-title'>Desktop Portfolio</h5>

                        <div className='desktop-portfolio-btns'>
                            <a href='https://yappeapp.herokuapp.com/' className='neu-button-white'><span>Site</span></a>
                            <a href='https://github.com/anzook/yappe-app' className='neu-button-white'><span>Code</span></a>
                        </div>
                    </div>

                    <div className='desktop-portfolio-image-div'>
                        <div className='desktop-img-div'>
                            <img className='desktop-img' alt='Desktop View' src={yappeDesktopImage}></img>
                        </div>
                        <div className='mobile-img-div'>
                            <img className='mobile-img'
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                    boxShadow: '0px 3px 30px 0px rgba(0,0,0,0.3)'
                                }}
                                alt='Mobile View' src={yappeMobileImage}>
                            </img>
                        </div>
                    </div>

                </Card.Body>
            </Card>

            <ul className={`project-select-ul ${props.large ? '' : 'hide'}`}>
                <li><FontAwesomeIcon icon={faCircle} /></li>
                <li><FontAwesomeIcon icon={faCircle} /></li>
                <li><FontAwesomeIcon icon={faCircle} /></li>
            </ul>
        </div>
    )
}


