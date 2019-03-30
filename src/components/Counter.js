import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

  // class의 공통 속성일때 ( function component에서는 사용이 안됨 )
  // 접근 방법 : 클래스.변수명으로 접근
  // Option 참고 : https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
  static propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    handleChangeScore: PropTypes.func
  };
    
  render() {

    const {handleChangeScore, id, score} = this.props;

    return (
      <div className="counter">  
        <button className="counter-action decrement" onClick={() => handleChangeScore(id, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => handleChangeScore(id, 1)}> + </button>
      </div>
    );
  }
}


export default Counter