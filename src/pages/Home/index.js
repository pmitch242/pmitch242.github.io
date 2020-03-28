import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import LinksIcons from '../../components/LinkIcons'
import './style.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <h2>This is</h2>
                <h1>Phill</h1>
                <LinksIcons />
            </Container>
        )
    }
}