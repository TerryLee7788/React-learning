import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const adminComponent = (Component) => {
//   return class Admin extends Component {
//     componentDidUpdate () {
//       console.log('Admin component did update.');
//       if (super.componentDidUpdate) {
//         super.componentDidUpdate();
//       }
//     }
//     render () {
//       if (isAdmin) {
//         return (
//           <div className="admin">
//             <p>Admin only</p>
//             {super.render()}
//           </div>
//         )
//       } else {
//         return null;
//       }
//     }
//   };
// };

class ComponentOne extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: this.props.count
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidUpdate () {
    console.log('ComponentOne component did update.');
  }
  onClick () {
    this.setState({
      count: ++this.state.count
    });
  }
  render () {
    return (
      <div>
        <h3>Component One Using React.component!</h3>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.onClick}>Update Number</button>
      </div>
    );
  }
}

ComponentOne.defaultProps = {
  count: 50
};

ComponentOne.propTypes = {
  count: PropTypes.number
};

export default ComponentOne;