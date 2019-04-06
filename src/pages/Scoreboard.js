import React from 'react';
import Header from "../components/Header";
import {Player} from "../components/Player";
import AddPlayerForm from "../components/AddPlayerForm";
import {connect} from "react-redux";

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
  }


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
                        handleChangeScore={this.handleChangeScore}
                />
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

export default connect(mapStateToProps)(Scoreboard);
