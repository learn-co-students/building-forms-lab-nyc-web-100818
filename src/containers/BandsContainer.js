import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput />
        <ul>
          {this.props.bands.map((band, id) => (<li key={id}>{band}</li>))}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapState)(BandsContainer)
