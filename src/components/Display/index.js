import React, { Component } from 'react';
import desktopImage  from './images/desktop.png';
import mobileImage  from './images/mobile.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelopeOpen as faEnvelopeOpenRegular, faFile } from '@fortawesome/free-regular-svg-icons'
// import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default class Display extends Component {
    render() {
        return (
            <div className='display-div'>
                <h2>{this.props.name}</h2>
                <div className="previews-div">
                    <div className="desktop-view-div">
                        <img alt='Desktop View' src={desktopImage}></img>
                    </div>
                    <div className="mobile-view-div">
                        <img alt='Mobile View' src={mobileImage}></img>
                    </div>
                </div>
                <div className="project-buttons-div">
                    BUTTONS
                </div>
            </div>
        )
    }
}

