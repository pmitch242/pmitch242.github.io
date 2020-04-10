import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from '../Portfolio';
import About from '../About';
import './style.css'

export default class Profile extends Component {
    render() {
        return (
            <Router>
                <Container fluid className='profile-container'>
                    <Row>
                        <Col lg={8} className='first-half'>
                            <Portfolio />
                        </Col>
                        <Col xs>
                            <Switch>
                                <About />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>

        )
    }
}