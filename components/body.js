import styles from '../styles/body.module.css';
import Filter from './filter';
import Modal from './modal';
import Todos from './todos';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export default function () {
    const [showModal, setshowModal] = useState(false);
    const [todos, settodos] = useState([]);
    const [filteredItems, setfilteredItems] = useState(todos);
    const addtodo = (title, value) => {
        const sno = todos.length;
        const myTodo = {
            sno: sno,
            title: title,
            value: value,
        }
        settodos([myTodo, ...todos]);
        setfilteredItems([myTodo, ...filteredItems]);
    }
    const deletetodo = (todo) => {
        const newtodos = todos.filter((e) => { return e !== todo });
        settodos(newtodos);
        setfilteredItems(newtodos);
    }
    const filtertodos = (query) => {
        if (query === "All") {
            setfilteredItems(todos);
        }
        else {
            setfilteredItems(todos.filter((todo) => { return todo.value === query }))
        }
    }
    useEffect(() => { }, [filteredItems])
    return (
        <div className={styles.container}>
            <Container className='mt-4 text-center'>
                <Row className="mx-auto">
                    <Col>
                        <Button variant="primary" onClick={() => { setshowModal(true) }}>Add Task</Button>
                    </Col>
                    <Col >
                        <Filter className='ms-auto' filtertodos={(query) => filtertodos(query)} />
                    </Col>
                </Row>
                <Modal show={showModal} setshowModal={setshowModal} addtodo={(title, value) => { addtodo(title, value) }} />
                <Todos className="mt-3 w-75" todos={filteredItems} deletetodo={(todo) => deletetodo(todo)} />
            </Container>
        </div>
    );
}