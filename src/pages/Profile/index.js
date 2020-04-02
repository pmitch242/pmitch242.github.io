import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from '../../components/Portfolio';
import About from '../../components/About';

export default class Profile extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>
                        <Switch>
                            <Route path='/about'><About /></Route>
                            <Route path='/portfolio'><Portfolio /></Route>
                        </Switch>                            
                        </Col>
                    </Row>
                </Container>
            </Router>

        )
    }
}