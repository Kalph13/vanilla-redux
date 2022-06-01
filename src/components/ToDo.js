import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators, deleteToDo } from "../store";

const ToDos = ({ id, text, onButtonClick }) => {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} 
            </Link>
            <button onClick={onButtonClick}>Delete</button>
        </li>
    )
};

/* Add onButtonClick() to ToDo() props */
const mapDispatchToProps = (dispatch, props) => {
    return {
        // onButtonClick: () => dispatch(actionCreators.deleteToDo(props.id))
        onButtonClick: () => dispatch(deleteToDo(props.id))
    }
};

export default connect(null, mapDispatchToProps)(ToDos);