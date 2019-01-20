import React from 'react';

const List = (props) => {

    return (

      <div>
          <h3>List Items</h3>
          {props.lists.map(({name}, idx) => <div key={idx}>{name}</div>)}
      </div>

    );

};

export default List;