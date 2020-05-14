import React from 'react';
// faPaw, faGamepad, faBookOpen

import PortfolioCard from '../PortfolioCard';
import ProjectSwitch from '../ProjectSwitch';

import './style.css';

export default function DesktopPortfolio(props) {
    return (
        <div
            className={`${props.large ? '' : 'desktop-portfolio-small'}`}>

            {/* PortfolioCard */}
            <div style={{ height: '100vh', paddingTop: '7vh' }}>
            <PortfolioCard
                project='yappe'
                title='yappE'
                siteLink='https://yappeapp.herokuapp.com/'
                codeLink='https://github.com/anzook/yappe-app'
                large={props.large}
            />
            </div>

            <div style={{ height: '100vh', paddingTop: '7vh' }}>
            <PortfolioCard
                project='trivia'
                title='Pop Trivia Culture'
                siteLink=''
                codeLink=''
                large={props.large}
            />
            </div>

            <div style={{ height: '100vh', paddingTop: '7vh' }}>
            <PortfolioCard
                project='google'
                title='Google'
                siteLink=''
                codeLink=''
                large={props.large}
            />
            </div>

            {/* ProjectSwitch */}
            <ProjectSwitch large={props.large} />

        </div>
    )
}


