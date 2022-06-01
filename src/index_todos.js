import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => { 
    return { type: ADD_TODO, text: text }
};

const deleteToDo = id => {
    return { type: DELETE_TODO, id: id }
};

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            /* return state.push(action.text); */ /* DO NOT MUTATE STATE! */
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !== parseInt(action.id));
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

/* Replaced by Redux */
/* const createToDo = toDo => {
    const li = document.createElement("li");
    li.innerText = toDo;
    ul.appendChild(li);
} */

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = event => {
    const id = event.target.parentNode.id;
    store.dispatch(deleteToDo(id));
};

const paintToDo = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.id = toDo.id;
        li.innerText = toDo.text;
        button.innerText = "Delete";
        button.addEventListener("click", dispatchDeleteToDo);
        li.appendChild(button);
        ul.appendChild(li);
    })
};

store.subscribe(paintToDo);

const onSubmit = event => {
    event.preventDefault();
    const toDo = input.value;
    input.value = "";
    /* createToDo(toDo); */ /* Replaced by Redux */
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);