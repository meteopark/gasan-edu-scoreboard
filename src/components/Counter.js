import React from 'react';

class Counter extends React.Component {
    
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