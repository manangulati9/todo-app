import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState} from 'react';

export default function (props) {
    const [buttontitle, setbuttontitle]=useState("Sort");
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title={buttontitle}>
                <Dropdown.Item onClick={()=>{props.filtertodos('All'); setbuttontitle("All")}}>All</Dropdown.Item>
                <Dropdown.Item onClick={()=>{props.filtertodos('1'); setbuttontitle("Complete")}}>Complete</Dropdown.Item>
                <Dropdown.Item onClick={()=>{props.filtertodos('2'); setbuttontitle("Incomplete")}}>Incomplete</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}