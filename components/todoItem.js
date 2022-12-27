import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup'
export default function (props) {
    const NewDate = () => {
        return (
            <div className="text-sm">{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
        );
    }
    const NewTime = () => {
        return (
            <div className='pr-5'>{new Date().getHours()}:{new Date().getMinutes()}</div>
        );
    }
    return (
        <div>
            <ListGroup.Item
                className="d-flex justify-content-between m-2 rounded">
                <div>
                    <div className="fw-bold">{props.todo.title}</div>
                    <div className="d-flex text-sm">
                    <NewTime/>
                    <NewDate/>
                    </div>
                </div>
                <CloseButton className="my-auto" onClick={()=>{props.deletetodo(props.todo)}}/>
            </ListGroup.Item>
        </div>
    );
}