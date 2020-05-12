import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import { Container, Col, Row } from 'react-bootstrap';

import DesktopPortfolio from '../../components/DesktopPortfolio';
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
                            <About large={false} />
                        </Breakpoint>

                        <Breakpoint customQuery="(min-width: 1005px)">
                            <About large={true} />
                        </Breakpoint>

                    </Col>


                    <Col lg={8} className='first-half'>
                        <DesktopPortfolio />
                        <DesktopPortfolio />
                    </Col>

                </Row>
            </Container>
        )
    }
}