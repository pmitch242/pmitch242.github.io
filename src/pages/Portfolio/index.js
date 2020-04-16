import React, { Component } from 'react';
// import $ from "jquery";
import { Container } from 'react-bootstrap'
import projects from '../../project.json'
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
                <li key={proj.id}>
                    <ProjectCard
                        name={proj.name}
                        image={proj.image}
                        description={proj.description}
                        deployed={proj?.deployed}
                        github={proj.github}
                    />
                </li>
            )
        })
        return (
            <Container fluid className='portfolio-container'>
                <ul>
                    {cards}
                </ul>
                <div className='portfolio-display-div'>
                    <h2>Display area</h2>
                </div>
            </Container>
        )
    }
}