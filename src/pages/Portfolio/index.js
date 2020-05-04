import React, { Component } from 'react';
// import $ from "jquery";
import Display from '../../components/Display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faGamepad, faBookOpen, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Container, Card } from 'react-bootstrap'
// import projects from '../../project.json';
import './style.css';


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProject: null,
            desktop: null,
            mobile: null,
            github: null,
            deployed: null,
            discription: null,
        }
    }

    render() {
        return (
            <Container fluid className='portfolio-container'>
                <ul>
                    <li>
                        <Card 
                            className='project-card yappe'
                            desktop='./yappePreview.jpg'
                            mobile=''
                            github=''
                            deployed=''
                        >
                            <Card.Body>
                                <FontAwesomeIcon icon={faPaw} />
                                <h4>yappE</h4>
                            </Card.Body>
                        </Card>
                    </li>

                    <li>
                        <Card className='project-card trivia'>
                            <Card.Body>
                                <FontAwesomeIcon icon={faGamepad} />
                                <h4>Pop Culture Trivia</h4>
                            </Card.Body>
                        </Card>
                    </li>

                    <li>
                        <Card className='project-card notes'>
                            <Card.Body>
                                <FontAwesomeIcon icon={faStickyNote} />
                                <h4>Notebook</h4>
                            </Card.Body>
                        </Card>
                    </li>

                    <li>
                        <Card className='project-card google-books'>
                            <Card.Body>
                                <FontAwesomeIcon icon={faBookOpen} />
                                <h4>Google Books React</h4>
                            </Card.Body>
                        </Card>
                    </li>
                </ul>
                <div className='portfolio-display-div'>
                    <Display />
                </div>
            </Container>
        )
    }
}