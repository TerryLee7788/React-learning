import React from 'react';
import PropTypes from 'prop-types';

class ComponentTwo extends React.Component {

  constructor (props) {
    super(props); // what's this mean?
    this.state = {
      count: props.count
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    this.setState({
      count: ++this.state.count
    });
  }

  render () {
    return (
      <div>
        <h3>Component One Using createReactClass</h3>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.onClick}>Update Number</button>
      </div>
    );
  }

}

ComponentTwo.defaultProps = {
  count: 11
};

ComponentTwo.propTypes = {
  count: () => {

    return PropTypes.count;

  }
};

/*

import createReactClass from 'create-react-class';

var ComponentTwo = createReactClass({
  getInitialState: function () {
    return {
      count: this.props.count
    };
  },
  getDefaultProps: function () {
    return {
      count: 11
    };
  },
  propTypes: {
    count: PropTypes.number
  },
  onClick: function () {
    this.setState({
      count: ++this.state.count
    });
  },
  render: function () {
    return (
      <div>
        <h3>Component One Using createReactClass</h3>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.onClick}>Update Number</button>
      </div>
    );
  }
});

*/

export default ComponentTwo;
