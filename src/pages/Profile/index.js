import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import { Container, Col, Row } from 'react-bootstrap';

import DesktopPortfolio from '../../components/DesktopPortfolio';
import About from '../About';

import './style.css';


export default function Profile() {
    const [project, setProject] = useState('yappe');

    function changeView(project) {
        setProject(project);
    }

    return (
        <Container fluid className='profile-container'>
            <Row className='profile-row'>
                <Col style={{ padding: '0px' }}>

                    {/* smaller screens */}
                    <Breakpoint customQuery="(max-width: 1004px)">
                        <About large={false} />
                    </Breakpoint>

                    {/* larger screens */}
                    <Breakpoint customQuery="(min-width: 1005px)">
                        <About large={true} />
                    </Breakpoint>

                </Col>


                <Col lg={8} className='first-half'>
                    {/* smaller screens */}
                    <Breakpoint customQuery="(max-width: 1004px)">
                        <DesktopPortfolio action={changeView} large={false} />
                    </Breakpoint>

                    {/* larger screens */}
                    <Breakpoint customQuery="(min-width: 1005px)">
                        <DesktopPortfolio action={changeView} large={true} />
                    </Breakpoint>
                </Col>

            </Row>
        </Container>
    )
}