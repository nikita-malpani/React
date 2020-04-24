import React, { Component } from 'react'

class ConditionalRendering extends Component {

  state = {
    loggedIn: false,
    text: ''
  }

  toggleText = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  displayChar

  deleteChar = (c) => {
    let updated = this.state.text.split("")
    updated.splice(c, 1)
    updated = updated.join('')
    this.setState({
      text: updated
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  render() {
    const displayChar = this.state.text.split("").map((e, i) => <span onClick={() => this.deleteChar(i)} style={this.styles.char}>{e}</span>)

    return (
      <div style={this.styles.ConditionalRendering}>
        <input type="text" value={this.state.text} onChange={this.handleChange} ></input>

        <p>{this.state?.text?.length > 6 ? 'Text Valid' : 'Text too short'}</p>

        {this.state.text}

        <div style={this.styles.charContainer}>
          {displayChar}
        </div>

        {/* <button onClick={this.toggleText} >
          {this.state.loggedIn ? 'Logout' : 'Login'}
        </button> */}
      </div>
    )
  }

  styles = {
    ConditionalRendering: {
      margin: '16px',
      padding: '10px'
    },
    charContainer: {
      border: '1px solid #eee',
      margin: '10px',
      display: 'flex'
    },
    char: {
      padding: '16px',
      margin: '5px 10px',
      border: '1px solid yellow'
    }
  }
}

export default ConditionalRendering