import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.name}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return { addBand: input => dispatch({ type: 'ADD_BAND', payload: input })}
}

export default connect(null, mapDispatch)(BandInput)
