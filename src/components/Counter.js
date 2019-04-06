import React from 'react';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../pages/scoreboard/Scoreboard.module.css';



export class Counter extends React.Component {

  // class의 공통 속성일때 ( function component에서는 사용이 안됨 )
  // 접근 방법 : 클래스.변수명으로 접근
  // Option 참고 : https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

  static propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    handleChangeScore: PropTypes.func
  }

  render() {
    // desctuct assignment
    const {changeScore, id, score} = this.props;

    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick={() => changeScore(id, -1)}> - </button>
        <span className={styles["counter-score"]}>{score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick={() => changeScore(id, 1)}> + </button>
      </div>
    );
  }
}

// (액션을 디스패치하는 펑션)을 (Props)로 subscribe해서 가져온다.
const mapDispatchToProps = (dispatch) => ({
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
    // changeScore(id, delta) = 액션
})

// export default connect(null, mapDispatchToProps)(Counter)
export default connect(null, {changeScore})(Counter) // 위에 있는 changeScore: changeScore 이기때문에 숏텐더 가능