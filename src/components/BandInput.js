// Add BandInput component
import React, { Component } from 'react'

const INITIAL_STATE = { name: '' }

class BandInput extends Component {
  state = INITIAL_STATE

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onFormSubmit(this.state)
    this.setState(INITIAL_STATE)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Band name..." value={this.state.band} onChange={this.handleChange} />
      </form>
    )
  }
}

export default BandInput
