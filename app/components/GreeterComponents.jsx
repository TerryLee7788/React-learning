/** Notes:
 * For ES6 classes, getInitialState has been deprecated in favor of declaring an initial state object in the constructor
 **/

import React from 'react';
import {Component} from 'react';
import GreeterMessage from 'GreeterMessage';
import GreeterForm from 'GreeterForm';

class Greeter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Terry',
      message: 'React Learning!'
    };
    this.handleNewData = this.handleNewData.bind(this);
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
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
}

export default Greeter;