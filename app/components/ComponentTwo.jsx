import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

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

export default ComponentTwo;
