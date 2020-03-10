import actions from '../actions'

export const initialState = {
  allSmurfs: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_SMURF': 
      console.log(action.payload)
      return({allSmurfs: action.payload})
    case 'ADD_SMURF':
      return(state)
    default:
      return (state)
  }
};

export default reducer;