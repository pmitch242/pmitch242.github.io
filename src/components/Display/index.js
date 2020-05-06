import React from 'react';
import yappeDesktopImage  from './images/yappe-desktop.png';
import yappeMobileImage  from './images/yappe-mobile.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelopeOpen as faEnvelopeOpenRegular, faFile } from '@fortawesome/free-regular-svg-icons'
// import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function Display(props) {

    
        return (
            <div className='display-div'>
                <h2>{this.props.name}</h2>
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
        )
}

