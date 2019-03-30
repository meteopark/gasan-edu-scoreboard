import React from 'react';
import Statistics from './Statistics';
import Stopwatch from './Stopwatch';

const Header = ({title, players}) => {

    // const {title, players} = props; // desturct assigment
    return (
      <header>
        <Statistics players={players}/>
        <h1>{ title }</h1>
        {/* <span className="stats">Players: { props.totalPlayers }</span> */}
        <Stopwatch/>
      </header>
      
    )
  }

export default Header
   