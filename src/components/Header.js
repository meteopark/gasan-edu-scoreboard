import React from 'react';
import Statistics from './Statistics';
import Stopwatch from './Stopwatch';

const Header = (props) => {

    return (
      <header>
        <Statistics players={props.players}/>
        <h1>{ props.title }</h1>
        <span className="stats">Players: { props.totalPlayers }</span>
        <Stopwatch/>
      </header>
      
    )
  }

export default Header
   