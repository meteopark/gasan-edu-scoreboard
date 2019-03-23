import React, { Component } from 'react';
import './App.css'; 
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';


class App extends Component {

  state = {
    players: [
      {name: 'LDK', id: 1, score: 0},
      {name: 'HONG', id: 2, score: 0},
      {name: 'KIM', id: 3, score: 0},
      {name: 'PARK', id: 4, score: 0 },
    ]
  };

  max_player_id = this.state.players.length;

  

  handleChangeScore = (id, data) => {

    // console.log('res :' + id + "," + data);
    this.setState(prevState => { // prevState : 기존 상태를 받아서 

      prevState.players.forEach(item => {

        if(item.id === id) item.score += data;

      });

      return { players: [...prevState.players] } // ES6 Spread연산자 : 새로운 바구니에 담아준다. 

    });
  }

  hanldeAddPlayer = (name) => {

    this.setState(prevState => {
      return {players: [...prevState.players, {name: name, score: 0, id: this.max_player_id+=1}]
      // players: [...prevState.players, {name, score: 0, id: 3}]
      // ...prevState.players 바구니를 펼치다라고 표현.
      // 쇼텐드프라퍼티
    }
    });

    // 위와 아래는 같다. 

    // this.setState(prevState => ({
    //   players: [...prevState.players, {name: name, score: 0, id: 3}]
    // }));
  }


/*
[ updating based on prev state ]
this.state.score + 1 로 상태를 업데이트하는 것은 비동기적으로 렌더링 된다. 
즉, 여러번의 이벤트가 일어나면 이 상태가 순서대로 실행되는것을 보장할 수 없는 불일치성 문제를 일으킬 수 있다. 
그래서 일치성을 보장하기 위해서는 이전 상태에 기반하여 상태를 업데이트하여야 한다. 
setState는 이전상태 값에 기반한 콜백 펑션을 제공해준다.

또한 setState에 지정된 state는 merge 된다. 
만일 state에 a,b,c,d,e 다섯가지의 상태가 정의되어있다면 
setState에 c만 상태를 갱신했다면 a, b, c, d, e 상태에서 c만 merge가 일어나고 
나머지 상태는 그대로 있게 된다는 얘기이다.
*/
  handleRemovePlayer = (id) => {

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
    
    // 위와 아래는 동일 
    // this.setState(prevState => {
    //   return {
    //     players: prevState.players.filter(item => item.id !== id)
    //   }
    // })

  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" 
          players={this.state.players}
          totalPlayers={this.state.players.length} />
        
        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name}
                                                 score={item.score}
                                                 key={item.id.toString()} removePlayer={this.handleRemovePlayer}
                                                 handleChangeScore={this.handleChangeScore}
                                                 id={item.id} />)
        }
        <AddPlayerForm hanldeAddPlayer={this.hanldeAddPlayer}/>
      </div>
    );
  }
}
 
export default App;