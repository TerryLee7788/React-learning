import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Admin from 'Admin';
import ComponentTwo from 'ComponentTwo';
import Greeter from 'GreeterComponents';
class App extends Component {

  render () {
    return (
      <div>
        <Admin count={123} />
        <ComponentTwo count={7788} />
        <Greeter/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);