import React from 'react';
import { Card } from 'react-bootstrap';

import ProjectLinkButton from '../ProjectLinkButton';
import PortfolioImages from '../PortfolioImages';

import './style.css'

export default function PortfolioCard(props) {
    return (
        <Card className='desktop-portfolio'>
            <Card.Body>
                <div className='project-header-div'>
                    <h5 className='desktop-project-title'>{props.title}</h5>

                    <div className='desktop-portfolio-btns'>
                        {/* ProjectLinkButton */}
                        <ProjectLinkButton link={props.siteLink} text='Site'/>
                        <ProjectLinkButton link={props.codeLink} text='Code'/>

                    </div>
                </div>

                {/* PortfolioImages */}
                <PortfolioImages project={props.project} />
            </Card.Body>
        </Card>
    )
}