import React from 'react';

import yappeDesktopImage from './images/yappe-desktop.png';
import yappeMobileImage from './images/yappe-mobile.png';
import triviaDesktopImage from './images/trivia-desktop.PNG';
import triviaMobileImage from './images/trivia-mobile.png';
import googleDesktopImage from './images/google-desktop.PNG';

import './style.css'



export default function PortfolioImages(props) {

    const desktopView = () => {
        switch (props.project) {
            case 'yappe':
                return yappeDesktopImage;
            case 'trivia':
                return triviaDesktopImage;
            case 'google':
                return googleDesktopImage;
            // case 'notebook':
            //     return <Display view='notebook'/>;
            default:
                return yappeDesktopImage;
        }
    }

    const mobileView = () => {
        switch (props.project) {
            case 'yappe':
                return <img className='mobile-img'
                    style={{
                        width: '90%',
                        borderRadius: '10px',
                        boxShadow: '0px 3px 30px 0px rgba(0,0,0,0.3)'
                    }}
                    alt='Mobile View' src={yappeMobileImage}>
                </img>
            case 'trivia':
                return <img className='mobile-img'
                    style={{
                        width: '90%',
                        borderRadius: '10px',
                        boxShadow: '0px 3px 30px 0px rgba(0,0,0,0.3)'
                    }}
                    alt='Mobile View' src={triviaMobileImage}>
                </img>
            case 'google':
                return;
            default:
                return <img className='mobile-img'
                    style={{
                        width: '90%',
                        borderRadius: '10px',
                        boxShadow: '0px 3px 30px 0px rgba(0,0,0,0.3)'
                    }}
                    alt='Mobile View' src={yappeMobileImage}>
                </img>;
        }
    }

    return (
        <div className='desktop-portfolio-image-div'>
            <div className='desktop-img-div'>
                <img className='desktop-img' alt='Desktop View' src={desktopView()}></img>
            </div>
            <div className='mobile-img-div'>
                {mobileView()}                
            </div>
        </div>
    )
}