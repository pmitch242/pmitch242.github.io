import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import LinkIcons from '../../components/LinkIcons'
import './style.css'

export default class About extends Component {

    render() {
        return (
            <Container className='about-container'>
                <h3>Phill Mitchell-Matsuyama</h3>

                <div className='about'>
                    <h1>Front-end Developer</h1>
                    <p>
                        Hi! I’m Phill (they/them), a front-end developer living in Baltimore, MD. Originally from The
                        Bahamas, I moved to the states in 2014 to attend college at Minnesota State University,
                        Mankato, where I earned a dual bachelor’s degree in Computer Engineering Technology and
                        Electronic Engineering Technology. After college, I worked as a Controls Systems Specialist and
                        a Research and Development Engineer before completing a full-stack certification program through Johns Hopkins
                        University. 
                    </p>
                    <p>
                        Despite the long hours (and occasional temper tantrums) that comes with being
                        a developer, I’ve never enjoyed my work as thoroughly as I do when creating and designing an application. Front-End
                        engineering requires me to think creatively and analytically about the user's experience. I believe
                        everything can always be improved, and I’m drawn to the nuance and attention to detail
                        required to excel as a front-end developer.
                    </p>
                </div>
                <LinkIcons />
            </Container>
        )
    }
}