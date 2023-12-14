import { useMutation, useQuery, useQueryClient } from "react-query";
import { addUser, deleteUser, getAllUsers, updateUser } from "./Api";
import UserTable from "./UserTable";
import UserDialog from "./UserDialog";
import { useState } from "react";

const UserList = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [editingUser, setEditingUser] = useState({
        id: 0, 
        name: "", 
        email: "", 
        active: false
    });

    const { data:users, error, isLoading, isError } 
        = useQuery("users", getAllUsers);

    const queryClient = useQueryClient();

    const { mutateAsync:mutateAsyncDelete, isLoading:isDeleting } 
        = useMutation(deleteUser);

    const { mutateAsync:mutateAsyncAdd, isLoading:isAdding } 
        = useMutation(addUser);

    const { mutateAsync:mutateAsyncUpdate, isLoading:isUpdating }
        = useMutation(updateUser);

    const onDelete = async (id) => {

        if (window.confirm("Are you sure?")) {
            
            await mutateAsyncDelete(id);
            queryClient.invalidateQueries("users");
        }
    }

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

    const onSave = async(user) => {

        if (user.id == 0) {
            // add
            await mutateAsyncAdd(user);
            queryClient.invalidateQueries("users");
            setShowDialog(false);
        } else {
            // edit
            await mutateAsyncUpdate(user);
            queryClient.invalidateQueries("users");
            setShowDialog(false);
        }
    }
    const onCancel = () => {
        setShowDialog(false);
    }

    const onEdit = (user) => {
        console.log("onEdit");
        setEditingUser({...user});
        setShowDialog(true);
    }
    const onAdd = () => {
        setEditingUser({
            id:0, 
            name:"", 
            email:"", 
            active:false
        });
        setShowDialog(true);
    }
    return (
        <div>
            <h1>UserList</h1>

            <UserTable 
                users={ users }
                onDelete={ onDelete }
                onEdit={ onEdit }/>


            <button onClick={ onAdd }>
                Add User
            </button>
            <UserDialog 
                user={ editingUser }
                setUser= { setEditingUser }
                show={ showDialog }
                onSave={ onSave }    
                onCancel={ onCancel }
            />
            <hr/>
            { JSON.stringify(editingUser) }
        </div>
    )
}

export default UserList;