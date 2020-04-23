import React, { Component } from "react";
import "./App.css";
import SayHello from './Component/HelloWorld';
import UserOutput from './Component/UserOutput';
import UserInput from './Component/UserInput';


class App extends Component {

  state = {
    name1: 'nikita',
    name2: 'om'
  }

  updateNamehandler = (keyName, event) => {
    console.log(keyName, event)
    this.setState({
      [keyName]: event.target.value
    })
    console.log(this.state)
  }

  handleChange = (event, keyName) => {
    console.log(keyName)
    this.setState({ [keyName]: event.target.value })
  }

  render() {
    return (
      <div>
        <UserInput
          name='name1' handleChange={(e, n) => this.handleChange(e, n)} value={this.state.name1}></UserInput>
        <UserOutput name={this.state.name1}></UserOutput>
        <UserInput
          name='name2' handleChange={this.handleChange.bind(this)} value={this.state.name2}></UserInput>
        <UserOutput name={this.state.name2}></UserOutput>
      </div>

    )
  }
}

export default App;
