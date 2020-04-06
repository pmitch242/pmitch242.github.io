import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import LinkIcons from '../../components/LinkIcons'
import './style.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
        }
    }

    handleSubmit = () => {
        this.setState({ redirect: true });
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/portfolio' />
        }
    }

    render() {
        return (
            <Container className='about-container'>
                {this.handleRedirect()}
                <h3>Phill Mitchell-Matsuyama</h3>

                <div className='about'>
                    <h1>Full Stack Developer</h1>
                    <p>
                        Hi! I’m Phill (they/them), a full-stack developer living in Baltimore, MD. Originally from The
                        Bahamas, I moved to the states in 2014 to attend college at Minnesota State University,
                        Mankato, where I earned a dual bachelor’s degree in Computer Engineering Technology and
                        Electronic Engineering Technology. After college, I worked as a Controls Systems Specialist and
                        an R&amp;D Engineer, before realizing that I needed more of a challenge in my work. Having
                        recently completed a 6-month full-stack certification program through Johns Hopkins
                        University, I’m excited to begin the next stage of my career.
                    </p>
                    <p>
                        Despite the long hours (and occasional fits of screaming at my computer) that come with being
                        a developer, I’ve never enjoyed my work as thoroughly as I do when I’m coding. Full-stack
                        engineering requires me to think creatively and analytically about problem-solving. I believe
                        everything can always be improved, and I’m drawn to the nuance and attention to detail
                        required to excel as a full-stack developer.
                    </p>
                    <Button onClick={this.handleSubmit} variant="outline-dark">PORTFOLIO</Button>
                </div>
                <LinkIcons />
            </Container>
        )
    }
}