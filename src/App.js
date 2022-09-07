import React, { Component } from 'react'
import TeamScore from "./components/Teamscore";
import {TeamNames} from './components/TeamNames'

function App() {
  return (
    <div style={{ display: 'flex'}}>
      {TeamNames.map((item,index)=>(
        <TeamScore
        key = {index}
        team = {item}
        />
      ))}
    </div>
  );
}

export default App;
