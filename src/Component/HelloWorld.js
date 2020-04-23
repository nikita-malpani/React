import React, { Component } from 'react';

const SayHello = (props) => {
    return <h1>Hello {props.name} {props.children} </h1>
}

// class SayHello extends Component{
//     render(){
//         return <h1>Hello  { this.props.name}</h1>
//     }
// }

export default SayHello;