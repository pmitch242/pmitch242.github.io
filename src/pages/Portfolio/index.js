import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap'
// , Row
import projects from '../../project.json'
// import ProjectCard from '../../components/ProjectCard'
import './style.css'
import ProjectCard from '../../components/ProjectCard';

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
                    <ProjectCard
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
                {cards}
            </Container>
        )
    }
}