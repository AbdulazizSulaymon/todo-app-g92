import React from 'react'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from "../../redux/actions"

const Todo = () => {
    const value = useSelector(state => state.value);
    const data = useSelector(state => state.tasks);

    const dispatch = useDispatch();

    const typing = (event) => {
        setValue(dispatch, event.target.value)
    }

    const add = () => {
        const action = { type: "ADD_TASK", payload: value }
        dispatch(action);
    }

    const deleteTask = (index) => {
        const action = { type: "DELETE_TASK", payload: index };
        dispatch(action);
    }

    return (
        <div className="bg-white rounded p-3 shadow">
            <h1>Todo App</h1>

            <div className="d-flex mb-2">
                <Input onChange={typing} value={value} placeholder="new task" className="me-2" />
                <Button color="primary" onClick={add} >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <ListGroup>
                {data?.map((value, index) => {
                    return (
                        <ListGroupItem key={index} tag="a" href="#" action
                            className="d-flex align-items-center justify-content-between">

                            <span>{index + 1}. {value.title}</span>

                            <Button color="danger" onClick={() => deleteTask(index)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>

                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>

    )
}

export default Todo
