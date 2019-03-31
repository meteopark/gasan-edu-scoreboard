import React from 'react';
import Statistics from './Statistics';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {updateTitle} from "../redux/actions";


const Header = ({title, players}) => {

  
    // const {title, players} = props; // desturct assigment
    return (
      <header>
        <Statistics players={players}/>
        <h1 onClick={() => updateTitle('Store Title')}>{ title }</h1>
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
  title: "My ScoreBoard" // title 이라는 속성이 넣어 오지 않았을 경우 default 값을 설정해 준다.
}


// store의 title을 props로 연결
const mapStateToProps = (state) => ({
  title: state.playerReducer.title
});

export default connect(mapStateToProps, {updateTitle: updateTitle})(Header);
// export default Header


   