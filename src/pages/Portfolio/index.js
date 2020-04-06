import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import projects from '../../project.json'
import ProjectCards from '../ProjectCards'
import './style.css'

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let cards = projects.map(proj => {
            return (
                <Col key={proj.id}>
                    <ProjectCards
                        name={proj.name}
                        image={proj.image}
                        description={proj.description}
                        deployed={proj?.deployed}
                        github={proj.github}
                    />
                </Col>
            )
        })
        return (
            <Container className='portfolio-container'>
                <span><a href='/about'>About page..</a></span>
                <h1>Portfolio</h1>
                <Container>
                    <Row className='portfolio-display'>
                        {cards}
                    </Row>
                </Container>
            </Container>
        )
    }
}