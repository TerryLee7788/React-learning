import React, { Component } from 'react';

class GreeterMessage extends Component {

    constructor(props) {

        super(props);

    }
    render() {

        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <p>{this.props.message}</p>
            </div>
        );

    }

}

export default GreeterMessage;
