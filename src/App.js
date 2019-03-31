import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'; // 함수형 일때는 {}필요 없음
import {Player} from './components/Player'; // 클래스형일때는 필요
import AddPlayerForm from './components/AddPlayerForm';
import {playerReducer} from "./redux/reducers/player";
import {connect} from "react-redux";


class App extends Component {

  handleRemovePlayer = (id) => {

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }));

  }



  handleChangeScore = (id, delta) => {

    console.log(id, delta);

    this.setState(prevState => { // prevState : 기존 상태를 받아서

      prevState.players.forEach(item => {

        if (item.id === id) item.score += delta;

      })

      return {players: [...prevState.players]} // ES6 Spread연산자 : 새로운 바구니에 담아준다.
    })
  }


  render() {
    return (
      <div className="scoreboard">
        <Header totalPlayers={10 + 1} players={this.props.players}/>
        {
          this.props.players.map(player => (
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    score={player.score}
                    handleRemovePlayer={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore}/>
          ))
        }
        <AddPlayerForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);