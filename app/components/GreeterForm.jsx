import React from 'react';
import { Component } from 'react';

class GreeterForm extends Component {
    constructor(props) {
        super(props);
    }
    onFormSubmit(e) {
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <div>
                    <input type="text" ref="name" placeholder="Enter Name." />
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter Message."></textarea>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default GreeterForm;
