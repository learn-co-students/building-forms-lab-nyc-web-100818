import React, { Component } from 'react'
import {connect} from 'react-redux'

import BandInput from '../components/BandInput'
import BandIndex from '../components/BandIndex'

class BandsContainer extends Component {
  onFormSubmit = data => {
    this.props.addBand(data)
  }

  render() {
    return(
      <div>
        <BandInput onFormSubmit={this.onFormSubmit} />
        <BandIndex bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (bandData) => dispatch({
      type: 'ADD_BAND',
      payload: bandData
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
