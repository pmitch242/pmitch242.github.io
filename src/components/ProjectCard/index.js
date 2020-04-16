import React, { Component } from 'react';
import './style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';



export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <Card className='project-card'>
                   { this.props.icon }
                    <h1 className="mb-2 text-muted">{this.props.name}</h1>
            </Card>
        )
    }
}