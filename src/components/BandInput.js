// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

const init = {
  text: ''
}

class BandInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState(init)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandData => dispatch( {
      type: 'ADD_BAND',
      payload: bandData
    })
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
