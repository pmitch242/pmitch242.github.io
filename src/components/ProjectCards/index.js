import React, { Component } from 'react';
import './style.css'
import { Card } from 'react-bootstrap';



export default class ProjectCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="mb-2 text-muted">{this.props.name}</Card.Title>
                    <img alt='project' src={this.props.image}/>
                    <Card.Text>
                        {this.props.description}.
                    </Card.Text>
                    <Card.Link href={this.props.deployed}>Deployed Link</Card.Link>
                    <Card.Link href={this.props.github}>GitHub Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}