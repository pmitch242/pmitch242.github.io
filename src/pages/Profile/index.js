import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import { Container, Col, Row } from 'react-bootstrap';
import Navbar from '../../components/Navbar'
import Portfolio from '../Portfolio';
import About from '../About';

import './style.css';


export default class Profile extends Component {
    render() {
        return (
            <Container fluid className='profile-container'>
                <Breakpoint customQuery="(max-width: 992px)">
                    <Navbar />
                </Breakpoint>

                <Row>
                    <Col lg={8} className='first-half'>
                        <Breakpoint customQuery="(min-width: 992px)">
                            <Portfolio />
                        </Breakpoint>
                    </Col>
                    <Col >
                        <About />
                    </Col>
                </Row>
            </Container>
        )
    }
}