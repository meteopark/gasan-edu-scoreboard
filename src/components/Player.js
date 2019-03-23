import React from 'react';
import Counter from './Counter';

const Player = (props) => {
// console.log(props);


  // function 일때는 this를 안써준다.
    
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
        </span>
        <span className="player-name">
          {props.name}
        </span>
        <Counter 
          id={props.id}
          score={props.score} 
          handleChangeScore={props.handleChangeScore}/>
      </div>
    );
  }

  export default Player