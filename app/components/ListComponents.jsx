import React, { Component } from 'react';

const lists = [
  { name: 'Terry' },
  { name: 'Terry2' },
  { name: 'Terry3' }
];

class List extends Component {
  render () {
    return (
      <div>
        <h3>List Items</h3>
        {lists.map((obj, idx) => <div key={idx}>{obj.name}</div>)}
      </div>
    );
  }
}

export default List;