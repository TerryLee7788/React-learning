/** Notes:
 * For ES6 classes, getInitialState has been deprecated in favor of declaring an initial state object in the constructor
 **/

import React from 'react';
import {Component} from 'react';

class GreeterMessage extends Component {
  constructor (props) {
    super(props);
  }
  render () {
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

class GreeterForm extends Component {
  constructor (props) {
    super(props);
  }
  onFormSubmit (e) {
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
  render () {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name."/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter Message."></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

class Greeter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Terry',
      message: 'React Learning!'
    };
  }
  handleNewData (updates) {
    this.setState(updates);
  }
  render () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <h3>Handle Form Values</h3>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData.bind(this)}/>
      </div>
    );
  }
}

export default Greeter;