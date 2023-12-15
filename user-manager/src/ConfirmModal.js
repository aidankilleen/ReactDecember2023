import { Button, Modal } from "react-bootstrap";

const ConfirmModal = ({ show, id, onOk, onCancel }) => {

    return (
        <Modal show={ show }>
        <Modal.Header>
            <Modal.Title>Confirm Dialog</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Delete { id }, are you sure?
        </Modal.Body>

        <Modal.Footer>
            <Button 
                variant="primary"
                onClick={ onOk }>Ok</Button>
            <Button 
                variant="secondary"
                onClick={ onCancel }>
                Cancel
            </Button>
        </Modal.Footer>
    </Modal>

    )
}

export default ConfirmModal;
