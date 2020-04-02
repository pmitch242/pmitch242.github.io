import React, { Component } from 'react';
import './style.css'
import { Container, Button } from 'react-bootstrap';

export default class About extends Component {

    handleSubmit = () =>{
        console.log('This bitch hit me!!!!!!!!!!!!!!')
    }
    render() {
        return (
            <Container>
                <h1>Phill Mitchell-Matsuyama</h1>

                <div className='about'>
                    <h2>Full Stack Developer</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dictum risus,
                        a scelerisque tortor ultricies non. Aenean efficitur porttitor dui ut ullamcorper.
                        In ac cursus turpis. Praesent sed orci molestie diam pretium scelerisque. Mauris sit amet felis lobortis,
                        rhoncus mi ac, semper urna. Aenean non cursus ipsum. Phasellus ac dolor malesuada,
                        dapibus diam id, maximus dolor. Duis nulla est, scelerisque non pretium eget, pharetra vel sapien.
                        Donec eu consequat nibh. Nullam in est in tortor dapibus ultrices id in orci.
                    </p>
                    <Button onClick={this.handleSubmit} variant="secondary">Portfolio</Button>{' '}
                </div>
            </Container>
        )
    }
}