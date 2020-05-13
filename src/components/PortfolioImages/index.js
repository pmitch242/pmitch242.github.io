import React from 'react';

import yappeDesktopImage from './images/yappe-desktop.png';
import yappeMobileImage from './images/yappe-mobile.png';
// import triviaDesktopImage from './images/trivia-desktop.PNG';
// import triviaMobileImage from './images/trivia-mobile.png';
// import googleDesktopImage from './images/google-desktop.PNG';

import './style.css'

export default function PortfolioImages(props) {
    return (
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
    )
}