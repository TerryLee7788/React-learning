import React, { PureComponent } from 'react';

class GreeterMessage extends PureComponent {

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
