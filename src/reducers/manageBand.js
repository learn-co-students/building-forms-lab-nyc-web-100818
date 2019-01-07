export default function manageBand(state = { bands: []}, action) {
  return action.type === 'ADD_BAND' ?
  {...state, bands: [...state.bands, action.payload]}
  : state
}
