import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import { Container, Col, Row } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import DesktopPortfolio from '../../components/DesktopPortfolio';
import Portfolio from '../Portfolio';
import About from '../About';

import './style.css';


export default class Profile extends Component {
    render() {
        return (
            <Container fluid className='profile-container'>
                {/* <Breakpoint customQuery="(max-width: 992px)"> */}
                {/* <Navbar /> */}
                <Row className='profile-row'>
                    {/* <Col >
                        <About />
                    </Col> */}

                    {/*  */}
                    <Col >
                        <Breakpoint customQuery="(max-width: 1004px)">
                            <About small={true} />
                        </Breakpoint>

                        <Breakpoint customQuery="(min-width: 1005px)">
                            <About small={false} />
                        </Breakpoint>

                    </Col>


                    <Col lg={8} className='first-half'>
                        <DesktopPortfolio />
                        <DesktopPortfolio />
                    </Col>

                </Row>

                {/* <Breakpoint customQuery="(min-width: 992px)">
                    <Row>
                        <Col lg={8} className='first-half'>
                            <Breakpoint customQuery="(min-width: 992px)">
                                <DesktopPortfolio desktop={true} />
                                <DesktopPortfolio desktop={true} />
                            </Breakpoint>
                        </Col>
                        <Col >
                            <About />
                        </Col>
                    </Row>
                </Breakpoint> */}
            </Container>
        )
    }
}