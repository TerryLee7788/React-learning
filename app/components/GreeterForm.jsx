import React, { PureComponent } from 'react';

class GreeterForm extends PureComponent {

    handleSubmit = (e) => {

        e.preventDefault();

        const updates = {};
        const name = this.refs.name.value;
        const message = this.refs.message.value;

        if (name.length > 0) {

          this.refs.name.value = '';
          updates.name = name;

        }

        if (message.length > 0) {

          this.refs.message.value = '';
          updates.message = message;

        }

        this.props.handleUpdateState(updates);

    }

    render () {

        return (

            <form onSubmit={this.handleSubmit}>
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
