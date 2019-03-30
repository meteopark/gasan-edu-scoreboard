import React from 'react';
import Counter from './Counter';


class Player extends React.Component { 

  render(){

    console.log(this.props.name, ' rendered');

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
        </span>
        <span className="player-name">
          {this.props.name}
        </span>
        <Counter 
          id={this.props.id}
          score={this.props.score} 
          handleChangeScore={this.props.handleChangeScore}/>
      </div>
    );
  }


  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps', nextProps);
  }
 
  // predicate 타입이라 return 해줘야 한다. 
  // 렌더링을 해야될까 말아야될까 true :렌더링, false: 비렌더링
  shouldComponentUpdate(nextProps, nextState, nextContext) { 
    console.log('shouldComponentUpdate', nextProps);
    
    // 현재 score와 nextProps의 score를 비교    
    return nextProps.score !== this.props.score ? true : false; 

  }
}

export default Player
