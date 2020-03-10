import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm = props => {

  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: null,
    height: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('porps', newSmurf)
    if (newSmurf.name != "" && newSmurf.age != "" && newSmurf.height != "") {
      props.addSmurf(newSmurf);
      setNewSmurf({
        name: "",
        age: null,
        height: ""
      })
    }
  }

  const handleChanges = e => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
  }


  return(
    <form onSubmit={handleSubmit}>
      <input name='name' type='text' value={newSmurf.name} onChange={handleChanges} placeholder='name' />
      <input name='age' type='number' value={newSmurf.age} onChange={handleChanges} placeholder='age' />
      <input name='height' type='text' value={newSmurf.height} onChange={handleChanges} placeholder='height' />

      <button type="submit" >Add Smurf</button>
    </form>
  )
}

export default connect(null, {addSmurf})(SmurfForm);