/** Notes:
 * For ES6 classes, getInitialState has been deprecated in favor of declaring an initial state object in the constructor
 **/

import React, { PureComponent } from 'react';
import GreeterMessage from 'GreeterMessage';
import GreeterForm from 'GreeterForm';
import List from 'ListComponents';

class Greeter extends PureComponent {

  constructor (props) {

    super(props);
    this.state = {
      name: 'Terry',
      message: 'React Learning!',
      lists: [
        { name: 'Terry' },
        { name: 'Terry2' },
        { name: 'Terry3' }
      ]
    };

  }


  handleUpdateState = (updates) => {

    const lists = [...this.state.lists];

    if (updates.name.length > 0) {

      lists.push(updates);

    }

    this.setState({
      ...updates,
      lists
    });

  };

  render () {

    return (

      <div className="form-container">
        <h3>Handle Form Values</h3>
        <GreeterMessage
            name={this.state.name}
            message={this.state.message}
        />
        <GreeterForm
            handleUpdateState={this.handleUpdateState}
        />
        <List
            lists={this.state.lists}
        />
      </div>

    );

  }

}

export default Greeter;