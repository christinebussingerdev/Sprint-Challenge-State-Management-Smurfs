import React, { useState } from 'react';

import { connect } from 'react-redux';
import { getSmurf } from '../actions';

import Smurf from './Smurf';

const SmurfList = props => {
  console.log(props);

  useState(() => {
    props.getSmurf();
  }, []);

  return(
    <div>
      {props.state.allSmurfs.map((smurf) => {
        return(
          <Smurf key={smurf.id} smurf={smurf} />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { getSmurf })(SmurfList);