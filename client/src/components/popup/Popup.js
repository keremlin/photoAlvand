import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Popup(props) {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    {props.close}
                </Button>
                <Button variant="primary" onClick={props.handleSave}>
                    {props.save}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}