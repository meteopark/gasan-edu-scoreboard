import React from 'react';

class Stopwatch extends React.Component {

    // isRunning = false; // class의 public 속성
    tickRef;

    constructor(props){

        super(props);

        this.state = {
            isRunning: false,
            timer: 0,

        }
    }

    // 함수가 아니라 속성임.
    tick = () => { 

        // isRunning 이 true면 timer를 1씩 추가
        if(this.state.isRunning){

            this.setState(prevState => ({
                timer: prevState.timer + 1
            }));
        }
    }

    handleClick = () => {

        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));

    }

    render(){

        return(
           <div className="stopwatch">
            <span className="stopwatch-time">{this.state.timer}</span>
            <button onClick={this.handleClick}>{this.state.isRunning ? "Stop" : "Start"}</button>
            <button>Reset</button>
           </div>
        )
    }

    

    // DOM이 렌더링 된 직후에 호출되는 라이프사이클
    // 3rd 라이브러리 로딩, 네트워크 호출
    componentDidMount() {

        this.tickRef = setInterval(this.tick, 1000); // 1초마다 tick 호출
    }

    // DOM이 파괴되기 직전에 호출되는 라이프사이클
    // 리소스 해제 등
    componentWillUnmount() {
        
        // clear 해주지 않으면 메모리 잡아 먹음
        clearInterval(this.tickRef);
    }
}

export default Stopwatch;