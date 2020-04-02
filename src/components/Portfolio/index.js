import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

export default class Portfolio extends Component{
    render() {
        return (
            <Container>
                <h1>Portfolio</h1>
                <Container>
                    <Row className='portfolio-display'>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                        <Col><img alt='For testing' src='https://via.placeholder.com/150/'></img></Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}