import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ state }) => {
    const { id } = useParams();
    const toDo = state.find(item => item.id === parseInt(id));
    return (
        <div>
            <h1>{toDo?.text}</h1>
            <h5>Created At: {toDo?.id}</h5>
        </div>
    );
}

/* Not Working with react-router-dom@6 (Nothing in props) */
/* Used useParams() Instead of Redux */
const mapStateToProps = (state, props) => {
    /* const { match: { params: { id } } } = props; */
    /* return { toDos: state.find(toDo => toDo.id = parseInt(id)) }; */
    return { state };
}

export default connect(mapStateToProps)(Detail);