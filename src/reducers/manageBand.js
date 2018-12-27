export default function manageBand(state = {
  bands: [],
}, action) {

  switch (action.type) {

    case 'ADD_BAND':
    let newState = { ...state, bands: state.bands.concat(action.payload.text) }
    return newState
    
    default:
    return state
  }
};
