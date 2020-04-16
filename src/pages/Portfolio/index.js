import React, { Component } from 'react';
// import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faGamepad, faBookOpen, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Container, Card } from 'react-bootstrap'
// import projects from '../../project.json'
import './style.css';


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Container fluid className='portfolio-container'>
                <ul>
                    <li>
                        <Card className='project-card yappe'>
                            <Card.Body>
                                <FontAwesomeIcon icon={faPaw} />
                                <h3>yappE</h3>
                            </Card.Body>
                        </Card>
                    </li>

                    <li>
                        <Card className='project-card trivia'>
                            <Card.Body>
                                <FontAwesomeIcon icon={faGamepad} />
                                <h3>Pop Culture Trivia</h3>
                            </Card.Body>
                        </Card>
                    </li>

                    <li>
                        <Card className='project-card notes'>
                            <Card.Body>
                                <FontAwesomeIcon icon={faStickyNote} />
                                <h3>Notebook</h3>
                            </Card.Body>
                        </Card>
                    </li>

                    <li>
                        <Card className='project-card google-books'>
                            <Card.Body>
                                <FontAwesomeIcon icon={faBookOpen} />
                                <h3>Google Books React</h3>
                            </Card.Body>
                        </Card>
                    </li>
                </ul>
                <div className='portfolio-display-div'>
                    <h2>Display area</h2>
                </div>
            </Container>
        )
    }
}