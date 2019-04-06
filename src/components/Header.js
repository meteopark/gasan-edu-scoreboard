import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';

const Header = ({title, players, updateTitle}) => {

  // const {title, players} = props; // destruct assignment
  return (
    <header className={styles.header}>
      <Statistics players={players}/>
      <h1 onClick={() => updateTitle('Store Title')}>{title}</h1>
      <Stopwatch/>
    </header>
  )
}

Header.propTypes = {

  title: PropTypes.string.isRequired,

  players: PropTypes.arrayOf(PropTypes.shape({

    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}

Header.defaultProps = {
  title: 'Scoreboard' // title 이라는 속성이 넣어 오지 않았을 경우 default 값을 설정해 준다.
}

// store의 title을 props로 연결
const mapStateToProps = (state) => ({
  title: state.playerReducer.title
});

export default connect(mapStateToProps, {updateTitle})(Header);
// export default Header