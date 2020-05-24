import React, { } from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import Navbar from '../../components/Navbar';
import LinkIcons from '../../components/LinkIcons';

import './style.css'


export default function About(props) {

    let theme = () => {
        if (props.large) {
            switch (props.theme) {
                case 'yappe':
                    return '#1ee09d';
                case 'trivia':
                    return '#c1e200';
                case 'google':
                    return '#5aaaff';
                default: return;
            }
        }
    }

    let backTheme = () => {
        if (props.large) {
            switch (props.theme) {
                case 'yappe':
                    return '#1ee09d26';
                case 'trivia':
                    return '#c1e2001c';
                case 'google':
                    return '#5aaaff26';
                default: return;
            }
        }
    }


    function addNav() {
        const about = props.about;
        if (about) {
            return <Navbar />
        }
    }

    return (
        <Container className={`about-container ${props.large ? "" : "about-container-mobile"} ${props.about ? "about-page-container" : " "}`}>

            {addNav()}

            <h1 style={{ color: backTheme() }} className='background-title'>ABOUT</h1>

            <h3>Phill Mitchell-Matsuyama</h3>

            <div className='about'>
                <h1 style={{ color: theme() }}>[ Front End | Full Stack Developer ]</h1>
                <p>
                    Hi! I’m Phill (they/them), a front-end developer living in Baltimore, MD. Originally from The
                    Bahamas, I moved to the states in 2014 to attend college at Minnesota State University,
                    Mankato, where I earned a dual bachelor’s degree in Computer Engineering Technology and
                    Electronic Engineering Technology. After college, I worked as a Controls Systems Specialist and
                    a Research and Development Engineer before completing a full-stack certification program through Johns Hopkins
                    University.
                    </p>
                <p>
                    Despite the long hours (and occasional temper tantrums) that come with being
                    a developer, I’ve never enjoyed my work as thoroughly as I do when creating and designing an application. Front-End
                    engineering requires me to think creatively and analytically about the user's experience. I believe
                    everything can always be improved, and I’m drawn to the nuance and attention to detail
                    required to excel as a front-end developer.
                    </p>
            </div>

            <div className='skills-div'>
                <h4 style={{ color: theme() }}>Skills</h4>
                <ul>
                    <li>React.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ES6</li>
                    <li>AJAX</li>
                    <li>JSON</li>
                    <li>JQuery</li>
                    <li>Node.js</li>
                    <li>RESTful APIs</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </div>

            <div style={{marginBottom: '15px'}}>
                <LinkIcons />

                <a href='mailto:phill.mitchell211@gmail.com' className='about-email-link'>
                    <span style={{ color: theme() }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span> phill.mitchell211@gmail.com
               </a>
            </div>
        </Container>
    )
}