import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import About from '../../components/About'

export default class Profile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col><About /></Col>
                </Row>
            </Container>
        )
    }
}