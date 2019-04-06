import React from 'react';
import {Counter} from "./Counter";
import styles from '../pages/scoreboard/Scoreboard.module.css';

export class Player extends React.Component {

  render() {

    console.log(this.props.name, ' rendered');

    // destruct assignment
    const {handleRemovePlayer, handleChangeScore, id, name, score} = this.props;

    return (
      <div className={styles.player}>
        <span className={styles["player-name"]}>
      <button className={styles["remove-player"]} onClick={() => handleRemovePlayer(id)}>x</button>
    </span>
        <span className={styles["player-name"]}>
      {name}
    </span>
        <Counter score={score}
                 id={id}
                 handleChangeScore={handleChangeScore}/>
      </div>
    );
  }

  /*
  전체적인 호출이 아닌 선택된 것에 대한 것만 렌더링 되기 위해 PureComponent 를 Override 해준다.
*/
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps:', nextProps);
  }

  // predicate 타입이라 return 해줘야 한다.
  // 렌더링을 해야될까 말아야될까 true :렌더링, false: 비렌더링
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate:', nextProps);
    // 현재 스코어와 nextProps의 score를 비교
    return this.props.score !== nextProps.score ? true : false;
  }
}
