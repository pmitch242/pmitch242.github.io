import React, { Component } from 'react';
// import $ from "jquery";
import Display from '../../components/Display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faGamepad, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Container, Card } from 'react-bootstrap'
// import projects from '../../project.json';
import './style.css';


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'yappe'
        }
    }

    handleChange = (project) => {
        this.setState({ view: project })
    }

    renderDisplay = () => {
        switch (this.state.view) {
            case 'yappe':
                return <Display view='yappe'/>;
            case 'trivia':
                return <Display view='trivia'/>;
            case 'google':
                return <Display view='google'/>;
            // case 'notebook':
            //     return <Display view='notebook'/>;
            default:
                return <Display view='yappe'/>;
        }
    }

    render() {
        return (
            <Container fluid className='portfolio-container'>
                <ul>
                    <li>
                        <Card
                            key='yappe'
                            onClick={() => this.handleChange('yappe')}
                            className='project-card yappe'
                        >
                            <Card.Body>
                                <FontAwesomeIcon icon={faPaw} />
                                <h4>yappE</h4>
                            </Card.Body>
                        </Card>
                    </li>

                    <li>
                        <Card
                            key='trivia'
                            onClick={() => this.handleChange('trivia')}
                            className='project-card trivia'
                        >
                            <Card.Body>
                                <FontAwesomeIcon icon={faGamepad} />
                                <h4>Pop Culture Trivia</h4>
                            </Card.Body>
                        </Card>
                    </li>

                    {/* <li>
                        <Card
                            key='notebook'
                            onClick={() => this.handleChange('notebook')}
                            className='project-card notes'
                        >
                            <Card.Body>
                                <FontAwesomeIcon icon={faStickyNote} />
                                <h4>Notebook</h4>
                            </Card.Body>
                        </Card>
                    </li> */}

                    <li>
                        <Card
                            key='google'
                            onClick={() => this.handleChange('google')}
                            className='project-card google-books'
                        >
                            <Card.Body>
                                <FontAwesomeIcon icon={faBookOpen} />
                                <h4>Google Books React</h4>
                            </Card.Body>
                        </Card>
                    </li>
                </ul>
                <div className='portfolio-display-div'>
                    {this.renderDisplay()}
                </div>
            </Container>
        )
    }
}