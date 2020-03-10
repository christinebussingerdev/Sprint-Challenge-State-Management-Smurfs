import React from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const App = (props) => {

  return (
    <div>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}


export default App;