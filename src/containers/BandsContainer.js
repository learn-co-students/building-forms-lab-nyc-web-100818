import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands'
class BandsContainer extends Component {
  render() {
    const { addBand, bands } = this.props
    return (
      <div>
        <BandInput addBand={addBand} />
        <hr />
        <h2>bands:</h2>
        <Bands bands={bands} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ bands: state.bands })
const mapDispatchToProps = dispatch => ({
  addBand: band =>
    dispatch({
      type: 'ADD_BAND',
      band
    })
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer)
