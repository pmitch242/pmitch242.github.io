import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import LinksIcons from '../../components/LinkIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <div className='intro-name-div'>
                    <h2>This is</h2>
                    <h1>Phill</h1>
                </div>
                <LinksIcons />
                <span className='arrow-next'><FontAwesomeIcon icon={faChevronDown} /></span>
            </Container>
        )
    }
}