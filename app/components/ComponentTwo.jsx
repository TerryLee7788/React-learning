import React from 'react';
import PropTypes from 'prop-types';

class ComponentTwo extends React.Component {

  constructor (props) {
    super(props);
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

export default ComponentTwo;
