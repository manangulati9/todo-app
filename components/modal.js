import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import AddTask from './addTask';
export default function (props) {
    const [title,settitle]=useState("");
    const [value,setvalue]=useState("1");
    return (
        <div>
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={()=>{props.setshowModal(false)}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add a new task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Write here" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select value={value} onChange={(e)=>{setvalue(e.target.value)}}>
                            <option value="1">Complete</option>
                            <option value="2">Incomplete</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <AddTask {...props} title={title} value={value} settitle={settitle} setvalue={setvalue} />
                    <Button variant="danger" onClick={()=>{props.setshowModal(false)}}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}