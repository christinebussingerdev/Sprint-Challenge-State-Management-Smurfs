import React, { useEffect, useReducer } from "react";
import "./App.css";
import { connect } from 'react-redux';
import axios from 'axios';

import { reducer, initialState } from '../reducers';

import { getSmurfs, addSmurf } from '../actions';

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const initSmurfs = (smurfList) => {
    dispatch({ type: 'INIT_SMURFS', payload: smurfList })
  };

  // const addSmurf = { type: 'ADD_SMURF' };
  
  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        initSmurfs(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {state.allSmurfs.map(smurf => {
        return(
          <div>
            <h2>{smurf.name}</h2>
            <h5><strong>age: </strong>{smurf.age}</h5>
            <p>Height: {smurf.height}</p>
          </div>
        )
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    allSmurfs: state.allSmurfs
  }
}

export default connect(mapStateToProps, {})(App);
