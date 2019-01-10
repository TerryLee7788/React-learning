import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

import Admin from 'Admin';
import ComponentTwo from 'ComponentTwo';
import List from 'ListComponents';
import Greeter from 'GreeterComponents';

class App extends Component {
  render () {
    return (
      <div>
        <Admin count={123} />
        <ComponentTwo count={7788} />
        <List />
        <Greeter />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);