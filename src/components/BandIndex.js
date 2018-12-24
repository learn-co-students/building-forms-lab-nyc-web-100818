import React from 'react'

const BandIndex = props => {
  const renderBands = () => {
    return props.bands.map(band => <li key={band.name}>{band.name}</li>)
  }

  return <ul>{renderBands()}</ul>
}

export default BandIndex