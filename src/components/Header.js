import React from 'react';
import Statistics from './Statistics';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';


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

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}

Header.defaultProps = {
  title: "ScoreBoard" // title 이라는 속성이 넣어 오지 않았을 경우 default 값을 설정해 준다.
}
export default Header
   