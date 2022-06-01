import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators, addToDo } from "../store";

/* Get the Redux State, addToDo from Home() props*/
const Home = ({ toDos, addToDo }) => {
    const [text, setText] = useState("");

    const onChange = event => {
        setText(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
      <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Write Your To-do" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}
            </ul>
      </div>  
    );
}

/* mapStateToProps(): Adds the Return Object to Home() props */
/* props: All the Props that Home() Receives */
/* Similar to store.getState() */

const mapStateToProps = (state, props) => {
    /* Add the Redux State to Home() props */
    return { toDos: state };
};

/* mapDispatchToProps: Get dispatch() and Adds the Functions to Home() props */
/* Similar to store.dispatch() */

const mapDispatchToProps = (dispatch, props) => {
    /* Add addToDo()*/
    return {
        // addToDo: text => dispatch(actionCreators.addToDo(text))
        addToDo: text => dispatch(addToDo(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);