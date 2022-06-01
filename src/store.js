import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

/* Replaced by Redux Toolkit (createAction) */
/* const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return {
        type: ADD,
        text: text
    }
}

const deleteToDo = id => {
    return {
        type: DELETE,
        id: id
    }
} */

/* Replaced by Redux Toolkit (createReducer) */
/* const reducer = ( state = [], action ) => {
    switch(action.type) {
        // case ADD: 
        case addToDo.type: 
            // return [{ text: action.text, id: Date.now() }, ...state];
            return [{ text: action.payload, id: Date.now() }, ...state];
        // case DELETE:
        case deleteToDo.type: 
            // return state.filter(toDo => toDo.id !== action.id);
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
}; */

/* Replaced by Redux Toolkit (configureStore) */
/* const store = createStore(reducer); */

/* Replaced by Another Redux Toolkit (createSlice) */
/* const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
    [addToDo]: (state, action) => [{ text: action.payload, id: Date.now() }, ...state],
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
}) 

export const actionCreators = {
    addToDo,
    deleteToDo
} */

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        addToDo: (state, action) => [{ text: action.payload, id: Date.now() }, ...state],
        deleteToDo: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

/* configureStore: Enable Redux Developer Tools */
/* const store = configureStore({ reducer }); */
const store = configureStore({ reducer: toDos.reducer });

export const { addToDo, deleteToDo } = toDos.actions;

export default store;