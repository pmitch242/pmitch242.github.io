import React from 'react';

import yappeDesktopImage from './images/yappe-desktop.png';
import yappeMobileImage from './images/yappe-mobile.png';
import triviaDesktopImage from './images/trivia-desktop.PNG';
import triviaMobileImage from './images/trivia-mobile.png';
import googleDesktopImage from './images/google-desktop.PNG';

import NeuBtn from '../NeuBtn';

import './style.css';

export default function Display(props) {

    const Project = () => {
        switch (props.view) {
            // yappe display
            case 'yappe':
                return <div>
                    <h2 className='project-title'>yappE</h2>
                    <div className="previews-div">
                        <div className="desktop-view-div">
                            <img alt='Desktop View' src={yappeDesktopImage}></img>
                        </div>
                        <div className="mobile-view-div">
                            <img alt='Mobile View' src={yappeMobileImage}></img>
                        </div>
                    </div>
                    <div className="project-buttons-div">
                        <NeuBtn
                            name='Website'
                            link='https://yappeapp.herokuapp.com/'
                        />
                        <NeuBtn
                            name='GitHub'
                            link='https://github.com/anzook/yappe-app'
                        />
                    </div>
                </div>

            // google books display
            case 'google':
                return <div>
                    <h2 className='project-title'>Google Books (React)</h2>
                    <div className="previews-div">
                        <div className="desktop-view-div">
                            <img alt='Desktop View' src={googleDesktopImage}></img>
                        </div>
                        {/* <div className="mobile-view-div">
                            <img alt='Mobile View' src={googleMobileImage}></img>
                        </div> */}
                    </div>
                    <div className="project-buttons-div">
                        BUTTONS
                    </div>
                </div>

            // pop culture trivia display
            case 'trivia':
                return <div>
                    <h2 className='project-title'>Pop Culture Trivia</h2>
                    <div className="previews-div">
                        <div className="desktop-view-div">
                            <img alt='Desktop View' src={triviaDesktopImage}></img>
                        </div>
                        <div className="mobile-view-div">
                            <img alt='Mobile View' src={triviaMobileImage}></img>
                        </div>
                    </div>
                    <div className="project-buttons-div">
                        BUTTONS
                    </div>
                </div>

            // notebook  display
            // case 'notebook':
            //     return <div>
            //         <h2>Notebook</h2>
            //         <div className="previews-div">
            //             <div className="desktop-view-div">
            //                 <img alt='Desktop View' src={yappeDesktopImage}></img>
            //             </div>
            //             <div className="mobile-view-div">
            //                 <img alt='Mobile View' src={yappeMobileImage}></img>
            //             </div>
            //         </div>
            //         <div className="project-buttons-div">
            //             BUTTONS
            //     </div>
            //     </div>

            default:
                return <div>
                    <h2 className='project-title'>yappE</h2>
                    <div className="previews-div">
                        <div className="desktop-view-div">
                            <img alt='Desktop View' src={yappeDesktopImage}></img>
                        </div>
                        <div className="mobile-view-div">
                            <img alt='Mobile View' src={yappeMobileImage}></img>
                        </div>
                    </div>
                    <div className="project-buttons-div">
                        BUTTONS
                </div>
                </div>
        }
    }


    return (
        <div className='display-div'>
            {Project()}
        </div>
    )
}

