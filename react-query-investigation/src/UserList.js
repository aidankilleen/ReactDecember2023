import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteUser, getAllUsers } from "./Api";
import UserTable from "./UserTable";

const UserList = () => {

    const { data:users, error, isLoading, isError } 
        = useQuery("users", getAllUsers);

    const queryClient = useQueryClient();

    const { mutateAsync, isLoading:isDeleting } = useMutation(deleteUser);

    const onDelete = async (id) => {
        await mutateAsync(id);
        queryClient.invalidateQueries("users");
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
    return (
        <div>
            <h1>UserList</h1>

            <UserTable 
                users={ users }
                onDelete={ onDelete }/>

        </div>
    )
}

export default UserList;