import { useMutation, useQuery, useQueryClient } from "react-query";
import { addUser, deleteUser, getAllUsers } from "./Api";
import UserTable from "./UserTable";
import UserDialog from "./UserDialog";
import { useState } from "react";

const UserList = () => {

    const [showDialog, setShowDialog] = useState(false);

    const { data:users, error, isLoading, isError } 
        = useQuery("users", getAllUsers);

    const queryClient = useQueryClient();

    const { mutateAsync:mutateAsyncDelete, isLoading:isDeleting } 
        = useMutation(deleteUser);



    const { mutateAsync:mutateAsyncAdd, isLoading:isAdding } 
        = useMutation(addUser);

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

        await mutateAsyncAdd(user);
        queryClient.invalidateQueries("users");
        setShowDialog(false);
    }
    const onCancel = () => {
        setShowDialog(false);
    }
    return (
        <div>
            <h1>UserList</h1>

            <UserTable 
                users={ users }
                onDelete={ onDelete }/>


            <button onClick={
                    () => setShowDialog(current=>!current)
                }>
                Add User
            </button>
            <UserDialog 
                show={ showDialog }
                onSave={ onSave }    
                onCancel={ onCancel }
            />
        </div>
    )
}

export default UserList;