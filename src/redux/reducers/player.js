import * as types from "../actionTypes";

let maxId = 4;

const playerInitialState = {

    title: 'My Scoreboard',
    players: [
        {name: "LDK", score: 1, id: 1},
        {name: "HONG", score: 1, id: 2},
        {name: "KIM", score: 1, id: 3},
        {name: "PARK", score: 1, id: 4},
    ]
}

/*
이전 상태 값인 state
초기 값은 undefined 이기 때문에 값을 playerInitialState 로 세팅해준다.
ES6 에는 default Argument 가 있다.

action 은 dispatch를 통해 들어온다. +
 */

export const playerReducer = (state = playerInitialState, action) => {

    switch (action.type) {

        case types.UPDATE_TITLE:

            return { // redux : 기존 값들을 받아와 넣어주고 새로운 값을 세팅해 준다.
                ...state, // 이전의 state 값들이 복사 된다.
                title: action.title // 새로운 값을 세팅해 준다.
            }

        case types.ADD_PLAYER:

            return {
                ...state,
                players: [
                    ...state.players, // 기존 값들을 복사 해주고
                    {name: action.name, score: 0, id: ++maxId} // 새로운 값들을 세팅해준다.
                ]
            }

        case types.CHANGE_SCORE:

            state.players.forEach(player => {
                if(player.id === action.id){
                    player.score += action.delta;
                }
            })

            return {
                ...state,
                players: [...state.players]

            }

        case types.REMOVE_PLAYER:

            return {
                ...state,
                players: state.players.filter(player => player.id !== action.id)

            }

        default:

            return state; // 고정
    }
}