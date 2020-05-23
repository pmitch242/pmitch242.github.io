import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';

import ProjectLinkButton from '../ProjectLinkButton';
import PortfolioImages from '../PortfolioImages';

import './style.css'

export default function PortfolioCard(props) {
    const techList = props.tech.map((tech) => <li>{tech}</li>);

    return (
        <Card className='desktop-portfolio'>
            <Card.Body>
                <div className='project-header-div'>
                    <h5 className='desktop-project-title'>{props.title}</h5>

                    <div className='desktop-portfolio-btns'>
                        <ProjectLinkButton link={props.siteLink} text='Site' />
                        <ProjectLinkButton link={props.codeLink} text='Code' />
                    </div>
                </div>

                {/* PortfolioImages */}
                <PortfolioImages project={props.project} />

                <Container className='project-details-container'>
                    <Row>
                        <Col>
                            <div className='des-div'>
                                <h4>Description</h4>
                                <p>{props.des}</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='tech-div'>
                                <h4>Main Tech</h4>
                                <div className='tech-list-div'>
                                    <ul className='tech-list-ul'>
                                        {techList}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}