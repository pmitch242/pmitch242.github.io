import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import LinkIcons from '../LinkIcons'
import './style.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            redirect: null,
        }
    }

    handleSubmit = () =>{
        this.setState({ redirect: true });
    }

    handleRedirect = () => {
        if(this.state.redirect){
            return <Redirect to ='/portfolio'/>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dictum risus,
                        a scelerisque tortor ultricies non. Aenean efficitur porttitor dui ut ullamcorper.
                        In ac cursus turpis. Praesent sed orci molestie diam pretium scelerisque. Mauris sit amet felis lobortis,
                        rhoncus mi ac, semper urna. Aenean non cursus ipsum. Phasellus ac dolor malesuada,
                        dapibus diam id, maximus dolor. Duis nulla est, scelerisque non pretium eget, pharetra vel sapien.
                        Donec eu consequat nibh. Nullam in est in tortor dapibus ultrices id in orci.
                    </p>
                    <Button onClick={this.handleSubmit} variant="outline-dark">PORTFOLIO</Button>
                </div>
                <LinkIcons />
            </Container>
        )
    }
}