import {ADD_PLAYER, UPDATE_TITLE, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes";

export const updateTitle = (title) => ({
    type: UPDATE_TITLE,
    title
})

export const addPlayer = (name) => ({
    type: ADD_PLAYER,
    name
})

export const changeScore = (id, delta) => ({
    type: CHANGE_SCORE,
    id: id,
    delta // key와 value가 같으므로 숏텐데??? 처리
})

export const removePlayer = (id) => ({
    type: REMOVE_PLAYER,
    id
})