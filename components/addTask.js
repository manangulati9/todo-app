import Button from 'react-bootstrap/Button';

export default function (props) {
    return (
        <>
            <Button variant='success' onClick={() => {
                if(props.title===""){
                    alert("Title cannot be blank")
                }
                else {
                    props.addtodo(props.title, props.value);
                    props.settitle("");
                    props.setvalue("1");
                    props.setshowModal(false);
                }
            }}>Submit</Button>
        </>
    );
}