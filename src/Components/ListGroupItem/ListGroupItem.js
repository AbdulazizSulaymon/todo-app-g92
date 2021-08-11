import { faArrowDown, faArrowUp, faBars, faEdit, faSave, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Input } from 'reactstrap';
import { deleteTask, editTask, taskDown, taskUp, toggleTask } from '../../redux/actions';
import ListGroupItemWrapper from './ListGroupItemWrapper'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

const ListGroupItem = ({ index, item }) => {
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(item.title);

    const cancel = () => {
        setValue(item.title);
        setIsEdit(false)
    }

    const save = () => {
        editTask(dispatch, index, value);
        setIsEdit(false);
    }

    return (
        <ListGroupItemWrapper tag="a" href="#" action
            className="d-flex align-items-center justify-content-between"
            onDoubleClick={() => toggleTask(dispatch, index)}>

            {isEdit ? <Input value={value} onChange={(e) => setValue(e.target.value)} className="me-2" />
                : <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>{index + 1}. {item.title}</span>}

            {isEdit ?
                <ButtonGroup >
                    <Button color="success" onClick={save}><FontAwesomeIcon icon={faSave} /></Button>
                    <Button color="danger" onClick={cancel}><FontAwesomeIcon icon={faTimes} /></Button>
                </ButtonGroup>
                : <UncontrolledButtonDropdown>
                    <DropdownToggle caret>
                        <FontAwesomeIcon icon={faBars} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Functions</DropdownItem>
                        <DropdownItem onClick={() => deleteTask(dispatch, index)}>
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </DropdownItem>
                        <DropdownItem onClick={() => setIsEdit(true)}>
                            <FontAwesomeIcon icon={faEdit} /> Edit
                        </DropdownItem>
                        <DropdownItem onClick={() => taskUp(dispatch, index)}>
                            <FontAwesomeIcon icon={faArrowUp} /> Up
                        </DropdownItem>
                        <DropdownItem onClick={() => taskDown(dispatch, index)}>
                            <FontAwesomeIcon icon={faArrowDown} /> Down
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>}

        </ListGroupItemWrapper>
    )
}

export default ListGroupItem;
