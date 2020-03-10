import React from 'react';
import axios from 'axios';

export const getSmurf = () => {
  return dispatch => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        dispatch({ type: 'GET_SMURF', payload: res.data})
      })
      .catch(err => console.log(err))
  }
}

export const addSmurf = () => {
  return dispatch => {
    axios
      .post('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        dispatch({ type: 'GET_SMURF', payload: res.data})
      })
      .catch(err => console.log(err))
  }
}