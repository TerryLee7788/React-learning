import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import List from './components/ListComponents';
import Greeter from './components/GreeterComponents';

class App extends Component {
  render () {
    return (
      <div>
        <ComponentOne count={123} />
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