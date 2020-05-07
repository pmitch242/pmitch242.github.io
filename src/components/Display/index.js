import React from 'react';
import yappeDesktopImage from './images/yappe-desktop.png';
import yappeMobileImage from './images/yappe-mobile.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelopeOpen as faEnvelopeOpenRegular, faFile } from '@fortawesome/free-regular-svg-icons'
// import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function Display(props) {

    const Project = () => {
        switch (props.view) {
            // yappe display
            case 'yappe':
                return <div>
                    <h2>yappE</h2>
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

            // google books display
            case 'google':
                return <div>
                    <h2>Google Books (React)</h2>
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

            // pop culture trivia display
            case 'trivia':
                return <div>
                    <h2>Pop Culture Trivia</h2>
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

            // notebook  display
            case 'notebook':
                return <div>
                    <h2>Notebook</h2>
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
            default:
                return <div>
                    <h2>yappE</h2>
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

