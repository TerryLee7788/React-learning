import React from 'react';
import { Component } from 'react';

class GreeterMessage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
}

export default GreeterMessage;
