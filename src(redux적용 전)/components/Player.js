import React from 'react';
import Counter from './Counter';


class Player extends React.Component { 

  render(){
    
    console.log(this.props.name, ' rendered');
    const {handleChangeScore, removePlayer, id, name, score} = this.props;
    
    // destruct assigment를 적용
    

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className="player-name">
          {name}
        </span>
        <Counter 
          id={id}
          score={score} 
          handleChangeScore={handleChangeScore}/>
      </div>
    );
  }

  

  /*
    전체적인 호출이 아닌 선택된 것에 대한 것만 렌더링 되기 위해 PureComponent 를 Override 해준다. 
  */
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
