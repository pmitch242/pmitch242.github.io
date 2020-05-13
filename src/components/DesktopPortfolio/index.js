import React from 'react';
// faPaw, faGamepad, faBookOpen

import PortfolioCard from '../PortfolioCard';
import ProjectSwitch from '../ProjectSwitch';

import './style.css';

export default function DesktopPortfolio(props) {
    return (
        <div
            style={{ height: '100vh', paddingTop: '7vh' }}
            className={`${props.large ? '' : 'desktop-portfolio-small'}`}>

            {/* PortfolioCard */}
            <PortfolioCard
                project='yappe'
                title='yappE'
                siteLink=''
                codeLink=''
                large={props.large}
            />
            <PortfolioCard
                project='trivia'
                title='Pop Trivia Culture'
                siteLink=''
                codeLink=''
                large={props.large}
            />
            <PortfolioCard
                project='google'
                title='Google'
                siteLink=''
                codeLink=''
                large={props.large}
            />

            {/* ProjectSwitch */}
            <ProjectSwitch large={props.large} />

        </div>
    )
}


