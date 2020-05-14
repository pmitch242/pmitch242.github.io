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
            <div id='desktop-yappe-div' style={{ height: '100vh', paddingTop: '7vh' }}>
            <PortfolioCard
                project='yappe'
                title='yappE'
                siteLink='https://yappeapp.herokuapp.com/'
                codeLink='https://github.com/anzook/yappe-app'
                large={props.large}
            />
            </div>

            <div id='desktop-trivia-div' style={{ height: '100vh', paddingTop: '7vh' }}>
            <PortfolioCard
                project='trivia'
                title='Pop Trivia Culture'
                siteLink='https://pmitch242.github.io/Pop-Culture-Trivia/'
                codeLink='https://github.com/pmitch242/Pop-Culture-Trivia'
                large={props.large}
            />
            </div>

            <div id='desktop-google-div' style={{ height: '100vh', paddingTop: '7vh' }}>
            <PortfolioCard
                project='google'
                title='Google'
                siteLink='https://young-journey-33791.herokuapp.com/'
                codeLink='https://github.com/pmitch242/google-books'
                large={props.large}
            />
            </div>

            {/* ProjectSwitch */}
            <ProjectSwitch large={props.large} />

        </div>
    )
}


