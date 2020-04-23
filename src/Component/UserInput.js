import React, { Component } from 'react';

const UserInput = (props) => {
  return (
    <div>
      < input type='text' onChange={(e) => props.handleChange(e, props.name)} value={props.value} />
    </div>
  )
}


export default UserInput