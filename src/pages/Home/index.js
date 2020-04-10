import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import LinksIcons from '../../components/LinkIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default class Home extends Component {
    render() {
        return (
            <Container fluid className='home-container'>
                <div className='intro-name-div'>
                    <h2>This is</h2>
                    <h1>PHILL</h1>
                    <LinksIcons />
                    <a href='/profile' className='arrow-next'><FontAwesomeIcon icon={faChevronDown} /></a>
                </div>
            </Container>
        )
    }
}