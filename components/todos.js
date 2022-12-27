import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './todoItem';
export default function (props) {
    return (
        <Container className={props.className}>
            <ListGroup as="ol" numbered>
                {props.todos.length === 0 ? "No Todos" : props.todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.sno} deletetodo={props.deletetodo}/>)
                })}
            </ListGroup>
        </Container>
    );
}