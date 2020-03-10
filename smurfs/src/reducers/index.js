import actions from '../actions'

export const initialState = {
  allSmurfs: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT_SMURFS': 
      console.log(action.payload)
      return({...state, allSmurfs: [action.payload]})
    case 'ADD_SMURF':
      return(state)
    default:
      return (state)
  }
};

export default reducer;