import React, { } from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from '../../components/Navbar';

import './style.css'


export default function About(props) {


    function addNav() {
        const about = props.about;
        if (about) {
            return <Navbar />
        }
    }

    return (
        <Container className={`about-container ${props.large ? "" : "about-container-mobile"} ${props.about ? "about-page-container" : " "}`}>

            {addNav()}

            <h3>Phill Mitchell-Matsuyama</h3>

            <div className='about'>
                <h1>Front End | Full Stack Developer</h1>
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
                <h4>Skills</h4>
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

            <div>
                <a href='mailto:phill.mitchell211@gmail.com' className='about-email-link'>
                    <span>@</span> phill.mitchell211@gmail.com
                </a>
            </div>
            {/* <LinkIcons /> */}
        </Container>
    )
}