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
                    <h5 className='desktop-project-title {}' style={{color: props.color}}>{props.title}</h5>

                    <div className='desktop-portfolio-btns'>
                        <ProjectLinkButton link={props.siteLink} text='Site' style={{border: props.color}}/>
                        <ProjectLinkButton link={props.codeLink} text='Code' />
                    </div>
                </div>

                {/* PortfolioImages */}
                <PortfolioImages project={props.project} />

                <Container className='project-details-container'>
                    <Row>
                        <Col sm={6}>
                            <div className='des-div'>
                                <h4 style={{borderBottom:`${props.color} 2px solid`}}>Description</h4>
                                <p>{props.des}</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='tech-div'>
                                <h4 style={{borderBottom:`${props.color} 2px solid`}}>Technologies</h4>
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