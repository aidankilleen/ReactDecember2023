import { useMutation, useQuery, useQueryClient } from "react-query";
import { addUser, deleteUser, getAllUsers } from "../Api";
import { Button, Form, Modal, Toast } from "react-bootstrap";
import { useState } from "react";
import ConfirmModal from "../ConfirmModal";

const UserPage = () => {

    const [showUserDialog, setShowUserDialog] = useState(false);
    const [editingUser, setEditingUser] = useState({
        id: 0, 
        name: "", 
        email: "", 
        active: false
    });

    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [idToDelete, setIdToDelete] = useState(0);

    const [showToast, setShowToast] = useState(false);

    const { data:users, error, isLoading, isError } = useQuery("users", getAllUsers);

    const { mutateAsync:mutateAsyncDelete, isLoading:isDeleting } = useMutation(deleteUser);

    const { mutateAsync:mutateAsyncAdd, isLoading:isAdding } = useMutation(addUser);

    const queryClient = useQueryClient();

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (isError) {
        return (
            <div>Error...</div>
        )
    }
    const onDelete = async (id) => {
        // show the confirm dialog
        setIdToDelete(id);
        setShowConfirmDialog(true);
    }

    const onDeleteConfirm = async () => {

        await mutateAsyncDelete(idToDelete);
        queryClient.invalidateQueries("users");
        setShowConfirmDialog(false);
        setShowToast(true);
    }

    const onOk = async() => {

        await mutateAsyncAdd(editingUser);
        queryClient.invalidateQueries("users");
        setShowUserDialog(false);
    }

    const onCancel = () => {

        setShowUserDialog(false);
    }
    return (
        <div>
            <h2>User List</h2>

            <Button 
                variant="success"
                onClick={ () => setShowUserDialog(true) }>
                Add User
            </Button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map(user => {
                        return (
                            <tr key={ user.id }>
                                <td>{ user.id }</td>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.active ? "Active" : "Inactive" }</td>
                                <td>
                                    <Button 
                                        variant="danger"
                                        size="sm"
                                        onClick={ () => onDelete(user.id) }>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Modal show={ showUserDialog }>
                <Modal.Header>
                    <Modal.Title>User Dialog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        value={ editingUser.name } 
                        onChange={ (evt) => setEditingUser(current => ({...current, name: evt.target.value}))}/>

                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        value={ editingUser.email } 
                        onChange={ (evt) => setEditingUser(current => ({...current, email: evt.target.value}))}/>

                    <Form.Check 
                        label="Active" 
                        checked={editingUser.active}
                        onChange={(evt) => setEditingUser(current => ({...current, active: evt.target.checked}))}/>
                    <hr/>
                    { JSON.stringify(editingUser)}
                </Modal.Body>
                <Modal.Footer>
                <Button 
                    variant="primary"
                    onClick={ onOk }
                    >Ok</Button>
                <Button 
                    variant="secondary"
                    onClick={ onCancel }
                    >
                    Cancel
                </Button>                    
                </Modal.Footer>
            </Modal>

            <ConfirmModal 
                show={ showConfirmDialog } 
                id={ idToDelete } 
                onOk={ onDeleteConfirm }
                onCancel={ () => setShowConfirmDialog(false) }/>

            <Toast 
                show={ showToast } 
                onClose={ () => setShowToast(false) }
                delay={ 3000 } 
                autohide>
                <Toast.Header>Deleted</Toast.Header>
                <Toast.Body>
                    User deleted
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default UserPage;
