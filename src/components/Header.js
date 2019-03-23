import React from 'react';
import Statistics from './Statistics';

const Header = (props) => {

    return (
      <header>
        <Statistics players={props.players}/>
        <h1>{ props.title }</h1>
        <span className="stats">Players: { props.totalPlayers }</span>
      </header>
      
    )
  }

export default Header
   