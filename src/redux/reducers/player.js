import { UPDATE_TITLE, ADD_PLAYER } from "../actionTypes";

let maxId = 4;

const playerInitialState = {

    title: 'My Scoreboard',
    players: [
        {name: 'LDK', id: 1, score: 0},
        {name: 'HONG', id: 2, score: 0},
        {name: 'KIM', id: 3, score: 0},
        {name: 'PARK', id: 4, score: 0 },
      ]
}

export const playerReducer = (state = playerInitialState, action) => {

    switch(action.type){

        case UPDATE_TITLE :
            return {
                ...state, 
                title: action.title    
            }

        case ADD_PLAYER :
            
            return {
                ...state,
                players: [
                    ...state.players,
                    {
                        name: action.name, score: 0, id: ++maxId
                    }
                ]
            }
        default: 
        
            return state;
    }
}

export const addPlayer = (name) => {

}