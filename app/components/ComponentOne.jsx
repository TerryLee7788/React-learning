import React from 'react';
import PropTypes from 'prop-types';

const isAdmin = true; // this value should be from the database
const adminComponent = (Component) => {
  return class Admin extends React.Component {
    render () {
      if (isAdmin) {
        return (
          <div className="admin">
            <p>Admin only</p>
            <Component {...this.props}/>
          </div>
        )
      } else {
        return null;
      }
    }
  };
};

// what is "{...this.props}" this means?

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

class ComponentOne extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: props.count
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

export default adminComponent(ComponentOne);