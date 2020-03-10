import React from 'react';

const Smurf = props => {

  return(
    <div>
      <h2>{props.smurf.name}</h2>
      <h5><strong>Age: </strong>{props.smurf.age}</h5>
      <p>Height: {props.smurf.height}</p>
    </div>
  )
}

export default Smurf;